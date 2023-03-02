// alert("Hello World")
// alert($("h1"))

// Variables
let buttonColors = ["red", "green", "blue", "yellow"];
let randomChosenColor = buttonColors[randomSequence()];
let gamePattern = [];

// Functions
function randomSequence() {
    let randomNumber = Math.random() * 4;
    return Math.floor(randomNumber);
}

let addColorToPattern = gamePattern.push(randomChosenColor);



