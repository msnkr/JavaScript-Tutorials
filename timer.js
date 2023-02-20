/*
find a way to countdown seconds
25 minutes work 5 minutes break
1AB 2AB 3AB 4LongBreak
convbert time to minutes and seconds.
*/

const studyTime = Math.round(25 * 60) -1;
const smallBreak = Math.round(5* 60) -1;
const longBreak = Math.round(30 * 60) -1;

let seconds;
let count = 0

function countDown() {
    if (seconds != 0) {
        console.log(seconds);
        seconds--;
    } else {
        clearInterval(x)
        count++;
    }
};

while ( count < 7) {
    if (count % 2 == 0) {
        seconds = 5 // Math.round(25 * 60) -1;
        x = setInterval(countDown, 1000, seconds)
    } else if (count == 6) {
        seconds =10 // Math.round(30 * 60) -1;
        x = setInterval(countDown, 1000, seconds)
    } else {
        seconds =2 // Math.round(5 * 60) -1;
        x = setInterval(countDown, 1000, seconds)
    };
}