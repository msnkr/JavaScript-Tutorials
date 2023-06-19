const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use( bodyParser.urlencoded({ extended:true }));
app.set("view engine", "ejs");

let todos = ["buy food", "eat food", "cook food"];
let workToDo = [];

app.get("/", (req, res) => {

    let date = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    const day = date.toLocaleDateString("en-us", options)

    res.render("index", {listTitle: day, listItems: todos});
})


app.post("/", (request, response) => {

    if (request.body.list == "Work List") {
        workToDo.push(request.body.todo);
        response.redirect("/work");
    } else {
        todos.push(request.body.todo);
        response.redirect("/");
    };
})

app.get("/work", (req, res) =>{
    res.render("index", {listTitle: "Work List", listItems: workToDo})
})

app.post("/work", (req, res) => {

    console.log(request.body);
    res.redirect("/work");
})


app.get("/about", (req, res) => {
    res.render("about");
})

app.listen(3000, () => console.log("Running"));