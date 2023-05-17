const express = require("express");
const bodyParser = require("body-parser");
const { sendFile } = require("express/lib/response");

//Requiring our module so that we can access it anywhere in our program
const date = require(__dirname + "/date.js")

const app = express();

//In a const array we can push an element we can't assign the existing element to some new element 
const items=["DSA","MERN","WEB3","Security and Authenticity"]//we have not initialised it in the app.post because of the limited scope of the variable 
const workItems = []

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))//all the static files are stored here 


/* HOME ROUTE */
app.get("/", function (req, res) {

  const day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});
});

/* HOME POST */
app.post('/',function(req,res){
  let item =req.body.newItem

  if(req.body.list === "Work"){
    workItems.push(item)
    res.redirect("/work")
  }else{
    items.push(item)
    res.redirect("/")
  }
  // res.render("list", {newListItem: item}) //This line will throw an error because newListItem is not defined, when the server is loaded we will land on the code block of app.get and see that on initialization is done on res.render in app.get, so we have to initialize in app.get
  //so we will redirect it to the home route where newList item will be initialised
})



/* WORK ROUTE */
app.get('/work', function (req,res){
  res.render("list", {
    listTitle : "Work List",
    newListItems : workItems,
  })
})

/* WORK POST */
app.post('/work', function(req,res){
   let item = req.body.newItem
   workItems.push(item)
   res.redirect('/work')
})


/* ABOUT PAGE */
app.get("/about",function(req,res){
  res.render("about")
})

/* LISTENING PORT */
app.listen(3000, function () {
  console.log("server is running at port 3000");
});