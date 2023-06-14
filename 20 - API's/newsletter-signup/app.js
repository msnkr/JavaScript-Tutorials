const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

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
        members: [
            {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
                }
            }
        ]
    }

    let jsonData = JSON.stringify(data);
    const options = {
        method: "POST",
        auth: `<Mikyle>:${key}`,
    }

    const request = https.request(url, options, response => {
        if (response.statusCode == 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failire.html");
        }
        
        response.on("data", data => {
            console.log(JSON.parse(data));
        })
    })
    
    request.write(jsonData)
    request.end();
})


app.listen(3000, () => console.log("http://localhost:3000"))

const url =  "https://us21.api.mailchimp.com/3.0/lists/34b79bbef3"
const key = "c204bfa6ac78d24f1f4a6bd25290651e-us21"
