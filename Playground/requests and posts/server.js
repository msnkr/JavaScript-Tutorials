const axios = require("axios");
const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"))

app.get("/", (request, response) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        const data = res.data;

        let html = "";
        data.forEach(post => {
            html += `<h4>${post.title}</h4>`;
            html += `<p>${post.body}</p>`;
        });
        response.send(html);
})
})

app.listen(3000, () => console.log("Running"));