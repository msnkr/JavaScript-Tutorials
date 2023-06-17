const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use( bodyParser.urlencoded({ extended:true }));
app.set("view engine", "ejs");

let todos = [];

app.get("/", (req, res) => {

    let date = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    const day = date.toLocaleDateString("en-us", options)

    res.render("index", {day, todos});
})


app.post("/", (request, response) => {
    todos.push(request.body.todo);

    response.redirect("/");
})

app.listen(3000, () => console.log("Running"));