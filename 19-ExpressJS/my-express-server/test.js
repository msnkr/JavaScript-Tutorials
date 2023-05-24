const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello"));
app.use(express.static("test.html"))


app.listen(port, () => console.log("Listening"))