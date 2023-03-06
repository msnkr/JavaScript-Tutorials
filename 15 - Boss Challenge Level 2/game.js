let randomNum = nextSequence();
let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = buttonColors[randomNum];
let gamePattern = [];
let userCLickedPattern = [];


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
    return Math.floor( Math.random() * 4 );

};

// Generate animation for buttons
function animateFlash(id) {
    $(`#${id}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
};

// add pressed class
function animatePress(id) {
    $(`#${id}`).addClass("pressed");
};

gamePattern.push(randomChosenColor);
animateFlash(randomChosenColor);
playSound(randomChosenColor);



/*
EVENTS
*/
$(".btn").on("click", function() {
    userChosenColor = $(this).attr("id");
    userCLickedPattern.push(userChosenColor);
    playSound(userChosenColor);   
    setTimeout(gamePattern, 1000, userChosenColor)
});
