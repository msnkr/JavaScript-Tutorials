const express = require("express");
const hbs = require("hbs");

const app = express();
app.set("view enginer", "hbs");
app.set("views", __dirname + "/views")
app.use(express.static("public"))

hbs.registerPartials(__dirname + "/views/partials")

app.get("/", (req, res) => {
    res.render("index.hbs")
})

app.listen(3000, () => console.log("Listening ==> http://localhost:3000"));