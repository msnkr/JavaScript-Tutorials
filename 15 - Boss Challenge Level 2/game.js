let randomColor = nextSequence();
let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = buttonColors[randomColor];
let gamePattern = [];
userClickedPattern = [];


// Functions
function nextSequence() {
    return  Math.floor( Math.random() * 4 );
};

function playSound(userChosenColor) {
    var audio = new Audio("sounds/" + userChosenColor + ".mp3");
    audio.play();
}

gamePattern.push(randomChosenColor);


// Events 
$(".btn").on("click", function() {
    $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
});
