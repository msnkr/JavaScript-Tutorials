const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"))
app.post("/", (req, res) => {
    var num1 = req.body.num1;
    var num2 = req.body.num2;

    var result = Number(num1) + Number(num2);
    res.send("The answer is: "+result)
})



app.get("/bmi", (req, res) => res.sendFile(__dirname + "/bmiCalculator.html"))
app.post("/bmi", (req, res) => {
    let weight = req.body.weight;
    let height = req.body.height**2;

    let result = parseFloat(weight) / parseFloat(height);

    res.send(`Your BMI is ${result.toFixed(2)}`)
})

app.listen(3000, () => console.log(`http://localhost:3000`));