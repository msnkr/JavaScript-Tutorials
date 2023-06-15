const axios = require("axios");
const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"))

app.get("/", (request, response) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        const data = res.data;

        const jsonData = {};
        data.forEach(item => {
            jsonData = {
                title: item.title,
                body: item.body,
            }
        console.log(jsonData)
        });

        response.send();
    })
})

app.listen(3000, () => console.log("Running"));