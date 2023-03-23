let musicContainer = document.getElementById("music-container"),
<<<<<<< HEAD
    title = document.getElementById("title"),
    progressContainer = document.getElementById("progress-container"),
    audio = document.getElementById("audio"),
    cover = document.getElementById("cover"),
    progress = document.getElementById("progress"),

    playBtn = document.getElementById("play"),
    prevBtn = document.getElementById("prev"),
    nextBtn = document.getElementById("next");
    

// Song titles
let songs = ["hey", "summer", "ukulele"];

// Keep track of song
let songIndex = 2;

// Initially load songs into DOM
loadSong(songs[songIndex]);


// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fa").classList.remove("fa-play");    
    playBtn.querySelector("i.fa").classList.add("fa-pause");
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fa").classList.remove("fa-pause");    
    playBtn.querySelector("i.fa").classList.add("fa-play");
    audio.pause()
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex])
    
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length -1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function updateProgress(e) {
    let { duration, currentTime } = e.srcElement;
    let progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let duration = audio.duration;

    audio.currentTime = (clickX / width )* duration
}

// Events
=======
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
>>>>>>> 339bc423e71b4bd1584e646f222b4ee607a0f2c0
playBtn.addEventListener("click", () => {
    let isPlaying = musicContainer.classList.contains("play");

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

<<<<<<< HEAD
// Change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Time/song update event
audio.addEventListener("timeupdate", updateProgress);

// CLick on progress bar
progressContainer.addEventListener("click", setProgress);

// Song ends 
audio.addEventListener("ended", nextSong);


=======
nextBtn.addEventListener("click", nextSong);

>>>>>>> 339bc423e71b4bd1584e646f222b4ee607a0f2c0
