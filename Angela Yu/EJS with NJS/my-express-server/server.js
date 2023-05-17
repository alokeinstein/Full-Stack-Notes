//Download Nodemon for not going in hyper terminal again and again for reloading the browser

//This is how we have to set the express server first 
const express = require("express");
const app = express();

/* this funciton tells what happens if anyone make the get request from the server, first parameter is location
 '/' this means anyone will directory go the home or root page , second parameter is the callback function*/
app.get("/", function (req, res) {
  // console.log(request)
  res.send("<h1>Hello </h1>");
});

app.get("/Contacts", function (req, res) {
  res.send("Contact Me: alokzoro2002@gmail.com");
});

app.get("/About", function (req, res) {
  res.send(
    "If nothing came from nothing then how come consiousness come from matter."
  );
});

//listen to the request that has been send to the server
app.listen(3000, function () {
  console.log("server has started on port 3000");
});

/* when the browser tries to get in touch with the localhost server 3000 , its not able to get anything  back,
how can we write a code so that our sever respond when the browser calls our sever, for that we have to
 display some info */
