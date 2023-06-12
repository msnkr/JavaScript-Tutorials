const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/sign-up.html")
})

app.listen(3000, () => console.log("http://localhost:3000"))