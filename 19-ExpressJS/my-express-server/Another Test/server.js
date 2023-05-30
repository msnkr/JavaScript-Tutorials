const express = require("express");
const hbs = require("hbs");

const app = express();
app.set("view enginer", "hbs");
app.set("views", __dirname + "/views")
app.use(express.static("public"))

hbs.registerPartials(__dirname + "/views/partials")

let demo = {
    name: "Mikyle",
    age: 32,
    traits: ["Drk Hair", "Blue Eyes", "Tall", "Muscular", "Tattoos"]
}



app.get("/", (req, res) => {
    res.render("index.hbs", {demo: demo});
})

app.listen(3000, () => console.log("Listening ==> http://localhost:3000"));