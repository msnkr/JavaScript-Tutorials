const express = require("express");
const https = require("https");

const app = express()

app.get("/", (req, res) => {
    
    https.get("https://api.openweathermap.org/data/2.5/weather?q=johannesburg&units=metric&appid=888fc6acf8d5a7a7b9e51209de4178cc ", response => {
        response.on("data", data => {
            let weatherData = JSON.parse(data);
            let weather = {
                temp: weatherData.main.temp,
                description: weatherData.weather[0].main,
                icon: weatherData.weather[0].icon,
            }
            showInfo(weather);
        })
    })
    res.send("hello")
})

// function showInfo(weather) {
    
// }


app.listen(3000, () => console.log("Running"))


// https://api.openweathermap.org/data/2.5/weather?q=johannesburg&units=metric&appid=888fc6acf8d5a7a7b9e51209de4178cc 

// https://openweathermap.org/img/w/01d.png