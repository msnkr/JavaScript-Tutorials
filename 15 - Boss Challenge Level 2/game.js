/*
Functions
*/
// Play sound when clicked
function playSound(id) {
    var audio = new Audio(`sounds/${id}.mp3`);
    audio.play();
};

// Events
$(".btn").on("click", function() {
    id = $(this).attr("id")
    animationClick(id);
    playSound(id);
})