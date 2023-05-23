const express = require("express");

const app = express();
const port = 3000;

app.get("/", (request, response) => response.send("Hello"));

app.get("/contact", (request, response) => response.send("<p>Contact Me</p>"));

app.get("/about", (request, response) => response.send("<p>About Me 'LOREM10000' Lol</p>"));

app.get("/cv", (req, res) => res.send("<h1>This is where I would put my cv</h1>"))

app.listen(port, () => console.log(`Server started on port: ${port }`));