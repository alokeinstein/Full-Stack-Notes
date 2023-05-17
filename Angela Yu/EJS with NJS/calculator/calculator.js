//Express Setup
const express = require("express");

//bodyParser setup
const bodyParser = require("body-parser");

const app = express();
/*when we try to post the data on the server from the html form , we have to use urlencoded() and extended:true 
alow us to post the nested objects*/
app.use(bodyParser.urlencoded({ extended: true }));

//Creating a root route
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//handle any post request that come to our home route
//npm install body-parser
app.post("/", function (req, res) {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;

  res.send("The answer is " + result);
});

/* BMI CALCULATOR */
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  let height = parseFloat(req.body.h);
  let weight = parseFloat(req.body.w);

  let result = weight / (height*height);

  res.send("Your BMI is " + result);
});

app.listen(3000, function () {
  console.log("sun raha hai na tu");
});
