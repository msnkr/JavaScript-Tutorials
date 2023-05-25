const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path")

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static("static"));

hbs.registerPartials(__dirname + "/views/partials");


app.get("/", (req, res) => {
    res.render("index");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})


app.listen(3000, () => console.log("http://localhost:3000/"))