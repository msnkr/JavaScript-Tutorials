const express = require("express");

const app = express();
const port = 3000;

app.get("/", (request, response) => response.send("Hello"));

app.get("/contact", (request, response) => response.send("<p>Contact Me</p>"));

app.get("/about", (request, response) => response.send("<p>About Me 'LOREM10000' Lol</p>"));


app.listen(port, () => console.log(`Server started on port: ${port }`));