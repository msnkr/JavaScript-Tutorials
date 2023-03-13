let video = document.getElementById("video");
let play = document.getElementById("play");
let stop = document.getElementById("stop");
let progress = document.getElementById("progress");
let timestamp = document.getElementById("timestamp");


// Functions
// Play and pause video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update play and pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = "<i class='fa fa-play fa-2x'></i>";
    } else {
        play.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
    }
}

// Update progress and timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = "0" + mins;
    }

    let secs = Math.floor(video.currentTime) % 60;
    if (secs < 10) {
        secs = "0" + secs;
    }

    timestamp.innerHTML = `${mins}:${secs}`
}

// Set video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop the video
function stopVideo() {
    video.pause();
    video.currentTime = 0;
}


// Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);