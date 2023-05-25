const express = require("express");

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");


app.get("/", (req, res) => {
    const name = "Mikyle";
    const age = 32;
    res.render("index", { name, age });
})

app.get("/contact", (req, res) => {
    const name = "Mikyle";
    const number = "445-345-3432";
    res.render("contact", {name, number});
})


app.listen(3000, () => console.log("http://localhost:3000/"))