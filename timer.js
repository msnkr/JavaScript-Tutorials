/*
find a way to countdown seconds
*/

let seconds = Math.round(25 * 60) - 1; 

function countDown() {
    if (seconds != 0) {
        console.log(seconds);
        seconds--;
    } else {
        clearInterval(x)
    }
};


x = setInterval(countDown, 1000, seconds)
