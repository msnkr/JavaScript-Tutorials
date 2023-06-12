const express = require("express");
const hbs = require("hbs");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended:true }));


app.get("/", (req, response) => {
    
    response.render("location")
})


app.post("/", (req, response) => {

    let city = req.body.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=888fc6acf8d5a7a7b9e51209de4178cc`;

    https.get(url, res => {

        res.on("data", data => {
            const weatherData = JSON.parse(data);

            const weather = {
                city: city,
                temp: Math.trunc(weatherData.main.temp),
                desc: weatherData.weather[0].description,
                icon: weatherData.weather[0].icon,
            };
        response.render("index", {weather})
        })
    })
})


app.listen(3000, () => console.log());

