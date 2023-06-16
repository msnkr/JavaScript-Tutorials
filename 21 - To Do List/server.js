const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    let date = new Date();
    let currentDay = date.getDay();

    var day = "";
    var dayOfWeek = new Array(7);
    dayOfWeek[0] = "Sunday";
    dayOfWeek[1] = "Monday";
    dayOfWeek[2] = "Tuesday";
    dayOfWeek[3] = "Wednesday";
    dayOfWeek[4] = "Thursday";
    dayOfWeek[5] = "Friday";
    dayOfWeek[6] = "Saturday";

    day = dayOfWeek[currentDay];

    res.render("index", {day});
})

app.listen(3000, () => console.log("Running"))