/*
Functions
*/
// Play sound when clicked
function playSound(id) {
    var audio = new Audio(`sounds/${id}.mp3`);
    audio.play();
};

function animationClick(id) {
    id = $(this).attr("id")
    id.fadeIn
}

// Events
$(".btn").on("click", function() {
    id = $(this).attr("id")
    animationClick(id);
    playSound(id);
})