let randomNum;
let randomChosenColor;
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userCLickedPattern = [];
let level = 0;


/*
FUNCTIONS
*/
// Play sound when clicked
function playSound(id) {
    let audio = new Audio(`sounds/${id}.mp3`);
    audio.play();
};

// Generate random number
function nextSequence() {
    randomNum = Math.floor( Math.random() * 4 );
    randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    animateFlash(randomChosenColor);
    level ++;
    $("h1").text(`Level: ${level}`);
};

// Generate animation for buttons
function animateFlash(id) {
    $(`#${id}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
};

// add pressed class
function animatePress(id) {
    id = $(`#${id}`);
    id.addClass("pressed");
    setTimeout(function() {
        id.removeClass("pressed");
    }, 100);
};

// Match user input vs game pattern
function checkAnswer() {
    for (let index = 0; index < gamePattern.length; index++) {
        console.log(gamePattern[index]);
        console.log(userCLickedPattern[index]);
    }
};


/*
*/


/*
EVENTS
*/
$(".btn").on("click", function() {
    userChosenColor = $(this).attr("id");
    userCLickedPattern.push(userChosenColor);
    playSound(userChosenColor);  
    animatePress(userChosenColor); 
    checkAnswer();
    setTimeout(nextSequence, 1000);
});


if (level == 0) {
    $("body").on("keypress", function(event) {
        if (event.key == "a") {
            nextSequence();
        }
    });
};
