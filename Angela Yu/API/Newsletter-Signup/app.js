const express = require("express");
const bodyParser = require("body-parser");
const request = require("request")
const https = require("https")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", function (req, res) {
  res.sendFile(__dirname+"/signup.html");
});


app.post("/",function(req,res){

  const firstName = req.body.top
  const lastName = req.body.middle
  const email = req.body.bottom

  const data ={
    members: [
      {
        email_address: email,
        status : "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  }

  const jsonData = JSON.stringify(data)

  const url = "https://us9.api.mailchimp.com/3.0/lists/81948e1426"

  const options = {
    method: "POST",
    auth: "alok1:3657ca60cf737028a83941ee0413dcfd-us9"
  }

  const request = https.request(url, options, function(response){

    /* Adding success and failure pages */
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    
    response.on("data", function(data){
      console.log(JSON.parse(data))
    })
  })

  request.write(jsonData)
  request.end()
})


/* Redirecting the failure page to home page */
app.post('/failure', function(req,res){
  res.redirect('/')
})

app.listen(3000, function () {
  console.log("server is running at port 3000");
});


//API key
//3657ca60cf737028a83941ee0413dcfd-us9
//list id 
//81948e1426