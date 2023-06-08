const express = require("express");
const hbs = require("hbs");
const https = require("https");

const app = express();
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static("public"));

app.get("/", (req, response) => {
    
    https.get(url, res => {
        console.log(res.statusCode);

        res.on("data", data => {
            const weatherData = JSON.parse(data);

            const weather = {
                temp: String(weatherData.main.temp),
                desc: weatherData.weather[0].description,
                icon: weatherData.weather[0].icon,
            };
        response.render("index", {weather})
        })
    })
})

app.listen(3000, () => console.log());

const url = "https://api.openweathermap.org/data/2.5/weather?q=johannesburg&units=metric&appid=888fc6acf8d5a7a7b9e51209de4178cc "