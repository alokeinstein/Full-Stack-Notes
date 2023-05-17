const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post('/', function(req,res){
    const query = req.body.cityName
    const apiKey = "2aa55adb1b6deafbbee7db7cf96e6375"
    const unit = "metric"

    const url ="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;

    https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {

     const weatherData = JSON.parse(data)//Parse JSON: formatting  the data in structured way
     const temp =  weatherData.main.temp
     const description = weatherData.weather[0].description
     const icon =  weatherData.weather[0].icon
     const imageUrl = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"

     //using this method we can send multiple responses
     res.write("<p>The description of the city is "+description)
     res.write("<h1>The temp in "+query+" is "+temp+"^C</h1>")
     res.write("<img src="+imageUrl+">")

     res.send()
    });
  });
})

app.listen(3000, function () {
  console.log("Server is running at port 3000");
});






































/* const object = {
        name: "Alok",
        age: 19,
        nationality: "Indian"
     }
     console.log(JSON.stringify(object))//converts objects into a single string */
