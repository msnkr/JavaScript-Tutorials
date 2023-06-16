const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
    let date = new Date();
    let currentDay = date.getDay();

    if (currentDay == 6 || currentDay == 0) {
        res.write("<h1>Yay. Its the weekend</h1>");
    } else {
        res.sendFile(__dirname + "/index.html")
    }
})

app.listen(3000, () => console.log("Running"))