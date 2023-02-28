/*
find a way to countdown seconds
25 minutes work 5 minutes break
1AB 2AB 3AB 4LongBreak
convbert time to minutes and seconds.
*/

let seconds;
let count = 0
let tic = [];

function countDown() {
    if (seconds != 0) {
        document.querySelector("#pomodoro-timer").innerHTML = `${ Math.floor(seconds / 60) }:${seconds % 60}`;
        seconds--;
    } else {
        clearInterval(x)
        count++;
        runAgain();
    }
};

function runAgain() {
    if (count <= 7 ) {
        if (count == 7) {
            seconds = 20 //Math.floor(30 * 60) -1;
            tic += "🛏️"
            document.querySelector("#tics").innerHTML = tic;
            x = setInterval(countDown, 1000, seconds)
        } else if (count % 2 == 0) {
            seconds = 10 //Math.floor(25 * 60) -1;
            tic += "✔️"
            document.querySelector("#tics").innerHTML = tic;
            x = setInterval(countDown, 1000, seconds)
        } else {
            seconds = 5 //Math.floor(5 * 60) -1;
            tic += "⭕"
            document.querySelector("#tics").innerHTML = tic;
            x = setInterval(countDown, 1000, seconds);
        }
    }
};

document.querySelector("#start-timer").addEventListener("click", runAgain);
document.querySelector("#stop-timer").addEventListener("click", function() {
    clearInterval(x)
    document.querySelector("#pomodoro-timer").innerHTML = "00:00";
    count = 0;
    tic = [];
    document.querySelector("#tics").innerHTML = "";

});