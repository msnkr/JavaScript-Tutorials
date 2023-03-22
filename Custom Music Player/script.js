let musicContainer = document.getElementById("music-container"),
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
playBtn.addEventListener("click", () => {
    let isPlaying = musicContainer.classList.contains("play");

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

// Change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Time/song update event
audio.addEventListener("timeupdate", updateProgress);

// CLick on progress bar
progressContainer.addEventListener("click", setProgress);

// Song ends 
audio.addEventListener("ended", nextSong);


