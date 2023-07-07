const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/calculator", (req, res) => {
  res.render("calculator");
});

app.listen(3000, () => console.log("running"));
