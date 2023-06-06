const express = require("express");
const https = require("https");

const app = express()

app.get("/", (req, res) => {
    https.get("https://api.openweathermap.org/data/2.5/weather?q=johannesburg&units=metric&appid=888fc6acf8d5a7a7b9e51209de4178cc", (response) => {
        console.log(response.statusCode)

        response.on("data", (d) => {
            const weatherData = JSON.parse(d);
            
            let temp = weatherData.main.temp;
            let desc = weatherData.weather[0].description;
            console.log(temp, desc);
        })
    });
    res.send("Hello")
})

app.listen(3000, () => console.log("Running"))


// https://api.openweathermap.org/data/2.5/weather?q=johannesburg&units=metric&appid=888fc6acf8d5a7a7b9e51209de4178cc 