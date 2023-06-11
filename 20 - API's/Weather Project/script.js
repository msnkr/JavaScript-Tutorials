const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


app.post("/", (req, res) => {
    const city = req.body.cityName;
    https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=888fc6acf8d5a7a7b9e51209de4178cc`, (response) => {
        console.log(response.statusCode);

        response.on("data", data => {
            const weatherData = JSON.parse(data);
            const currentTemp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = `http://openweathermap.org/img/w/01n.png`
            res.write(`<h2>The current weather in ${city} is ${currentTemp} in celcius</h2>`);
            res.write(`<h3>${description}</h3>`);
            res.write(`<img src="${imageUrl}>"`);
            res.send()
        })
    })
})

app.listen(3000, () => console.log())


// https://api.openweathermap.org/data/2.5/weather?q=johannesburg&units=metric&appid=888fc6acf8d5a7a7b9e51209de4178cc 