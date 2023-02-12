// var a = "3";
// var b = "8";

// var c = b; // 8
// b = a; // 3
// a = c; // 8

// console.log(`A: ${a}`);
// console.log(`B: ${b}`);

// var message = 'Enter the words you want to check the length of out of 280 akdhbfakdkfhnak awiehfoa aoudhfoa hlujh';
// var wordLimit = 280;

// var charLeft = message.length - +wordLimit;

// console.log(`You have written ${message.length} letters. You have ${charLeft} left.`);

/*
SLICE
*/

// var name = 'Mikyle';
// console.log(name.slice(0,1));
// console.log(name.slice(5,6));

// var message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus. Dictum varius duis at consectetur lorem donec massa sapien faucibus.";
// var tweetCount = message.length;
// slicedMessage = message.slice(0,140)

// console.log(slicedMessage);


// var name = 'miKyLe';
// var firstLetter = name.slice(0,1);
// var lastLetter = name.slice(1, name.length);

// console.log(firstLetter.toUpperCase() + lastLetter.toLowerCase());

// console.log(3 + 5 * 2);
// console.log((3 + 5 )* 2);

// dogAge = 5;
// dogToHumanAge = ((dogAge - 2) * 4) + 21;

// console.log(dogToHumanAge);

// function main() {
//     moveRobot();
//     turnLeft();
//     moveRobot();
//  }


//  function moveRobot() {
//     move();
//     move();
//     move();
//     move();
// }

// function main() {
//     putBeeper();
//     putBeeperAgain();
// }

// function putBeeper5Times() {
//     move();
//     turnLeft();
//     move();
//     turnRight();
//     putBeeper();
// }

// function putBeeperAgain() {
//     putBeeper5Times();
//     putBeeper5Times();
//     putBeeper5Times();
//     putBeeper5Times();
// }

// function main() {
//     firstRow();
//     secondRow();
//     firstRow();
//     secondRow();
//     lastRow();
// }

// function firstRow() {
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     turnLeft();
//     move();
//     turnLeft();
// }

// function secondRow() {
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     turnRight();
//     move();
//     turnRight();
// }

// function lastRow() {
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
// }


// function getMilk(monies) {
//     let price = 1.5;
//     console.log( Math.floor(monies / price) );
// }

// getMilk(5)

function calculateBmi(weight, height) {
    bmi =( weight / height ** 2);
    return bmi;
}

console.log( Math.floor(calculateBmi(65, 1.8)) );