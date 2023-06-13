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

    const split = name.split(" ")
    const firstName = split[0];
    const lastName = split[1];
    
    let data = {
        members: {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
            }
        }
    }

    let jsonData = JSON.stringify(data);
    res.sendFile(__dirname + "/success.html")
})


app.listen(3000, () => console.log("http://localhost:3000"))
