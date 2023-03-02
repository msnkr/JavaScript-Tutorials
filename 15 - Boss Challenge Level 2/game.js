// alert("Hello World")
// alert($("h1"))

// Variables
let buttonColors = ["red", "green", "blue", "yellow"];
let randomChosenColor = buttonColors[randomSequence()];
let gamePattern = [];
let addColorToPattern = gamePattern.push(randomChosenColor);
let randomColorHex = "#" + randomChosenColor;
let userChosenPattern = [];

// Functions
function randomSequence() {
    let randomNumber = Math.random() * 4;
    return Math.floor(randomNumber);
};

function randomColorSelected() {
    $(randomColorHex).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var randomSound = new Audio("sounds/" + randomChosenColor + ".mp3");
    randomSound.play();
};


// Events
$(randomColorHex).on("click", randomColorSelected);
$(".btn").on("click", function() {
    userChosenColor = this.id;
    userChosenPattern.push(userChosenColor);
})

console.log(userChosenPattern)
