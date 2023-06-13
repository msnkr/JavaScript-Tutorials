const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/sign-up.html")
})

app.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    console.log(name)
    console.log(email)
    res.sendFile(__dirname + "/success.html")
})


app.listen(3000, () => console.log("http://localhost:3000"))