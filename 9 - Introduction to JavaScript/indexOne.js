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


var name = 'mikyle';
var firstLetter = name.slice(0,1);
var lastLetter = name.slice(1, name.length);

console.log(`${firstLetter.toUpperCase()}${lastLetter}`);