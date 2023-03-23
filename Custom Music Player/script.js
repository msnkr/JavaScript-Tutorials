let musicContainer = document.getElementById("music-container"),
    progressContainer = document.getElementById("progress-container"),
    progress = document.getElementById("progress"),

    audio = document.querySelector("audio"),
    cover = document.getElementById("cover"),

    playBtn = document.getElementById("play"),
    prevBtn = document.getElementById("prev"),
    nextBtn = document.getElementById("next");


let songs = ["ukelele", "hey", "summer"];
let songIndex = 2;



// Functions

// Next song


// pause song
function pauseSong() {
    musicContainer.classList.remove("play");

    audio.pause();
    playBtn.querySelector("i.fa").classList.add("fa-play");
    playBtn.querySelector("i.fa").classList.remove("fa-pause");
}

// play song
function playSong() {
    let song = songs[songIndex];

    title.innerText = song;
    musicContainer.classList.add("play");
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;

    playBtn.querySelector("i.fa").classList.remove("fa-play");
    playBtn.querySelector("i.fa").classList.add("fa-pause");
}


// Events
// Play song or pause song event
playBtn.addEventListener("click", () => {
    let isPlaying = musicContainer.classList.contains("play");

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

nextBtn.addEventListener("click", nextSong);

