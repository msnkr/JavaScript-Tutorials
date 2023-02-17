/*
function
convert minutes to seconds, countdown seconds, cancel countdown when seconds == 0
*/

function countDown() {
    let seconds = Math.floor(25*60);
    while (seconds > 0) {
        console.log(seconds)
        seconds--;
    }
}

setInterval(countDown, 1000)

// console.log(25*60);