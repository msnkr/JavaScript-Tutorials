const express = require("express");
const https = require("https");

const app = express()
app.use(express.static("public"));

app.get("/", (req, res) => {
    
    https.get("https://api.openweathermap.org/data/2.5/weather?q=johannesburg&units=metric&appid=888fc6acf8d5a7a7b9e51209de4178cc", (response) => {
        console.log(response.statusCode);

        response.on("data", data => {
            const weatherData = JSON.parse(data);
            const weather = {
                temp: String(weatherData.main.temp),
                desc: weatherData.weather[0].description,
                icon: weatherData.weather[0].icon,
            };

            let output = `<div style="margin-top:200px; margin-left:200px">
                <h3 class="weather">The weather in Johannesburg is ${weather.temp}</h3> <img class="image" style=width:200px; height=200px src="http://openweathermap.org/img/w/${weather.icon}.png">  <h4 class="description" >${weather.desc}</h4>
            </div>`
            res.send(output);
        })
    })
})

app.listen(3000, () => console.log())


// https://api.openweathermap.org/data/2.5/weather?q=johannesburg&units=metric&appid=888fc6acf8d5a7a7b9e51209de4178cc 