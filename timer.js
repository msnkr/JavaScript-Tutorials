/*
find a way to countdown seconds
25 minutes work 5 minutes break
1AB 2AB 3AB 4LongBreak
convbert time to minutes and seconds.
*/

let seconds;
let count = 0

function countDown() {
    if (seconds != 0) {
        console.log(`${ Math.floor(seconds / 60) } : ${seconds}`);
        seconds--;
    } else {
        clearInterval(x)
        count++;
        runAgain();
    }
};

function runAgain() {
    if (count <= 6 ) {
        if (count == 6) {
            seconds = Math.floor(30 * 60) -1;
            x = setInterval(countDown, 1000, seconds)
        } else if (count % 2 == 0) {
            seconds = Math.floor(25 * 60) -1;
            x = setInterval(countDown, 1000, seconds)
        } else {
            seconds = Math.floor(5 * 60) -1;
            x = setInterval(countDown, 1000, seconds)
        }
    }
};

runAgain();