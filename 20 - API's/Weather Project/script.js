const express = require("express");
const https = require("https");

const app = express()

app.get("/", (req, res) => {
    
    https.get("https://api.openweathermap.org/data/2.5/weather?q=johannesburg&units=metric&appid=888fc6acf8d5a7a7b9e51209de4178cc", (response) => {
        console.log(response.statusCode);

        response.on("data", data => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            res.send("hello there")
        })
    })
})

app.listen(3000, () => console.log())


// https://api.openweathermap.org/data/2.5/weather?q=johannesburg&units=metric&appid=888fc6acf8d5a7a7b9e51209de4178cc 