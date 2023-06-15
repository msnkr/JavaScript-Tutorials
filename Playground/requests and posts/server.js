const axios = require("axios");
const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/posts/20")
    .then((response) => {
        console.log(response.data)
    })
    res.sendFile(__dirname + "/new-post.html");
})

app.listen(3000, () => console.log("Running"));