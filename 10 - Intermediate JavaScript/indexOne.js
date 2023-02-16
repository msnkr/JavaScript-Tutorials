// let name1 = 'mikyle';
// let name2 = 'kashia';

// let percentage = Math.random();
// percentage = Math.floor(percentage * 100) + 1;
// if ( percentage > 70 ) {
//     console.log(`${name1} and ${name2} score: ${percentage}%. You love eachother like Kanye loves Kanye `);
// } else if (percentage > 30 && percentage <=70) {
//     console.log(`${name1} and ${name2} score: ${percentage}%`);
// } else {
//     console.log(`${name1} and ${name2} score: ${percentage}%. You go together like oil and water. `);
// }

// let year = 2024;

// if (year % 4 == 0) {
//     console.log('Leap Year')
// } else if (year % 100 == 1 && year % 400 == 0) {
//     console.log('Leap Year')
// }  else {
//     console.log('Not a leap year.');
// }

// let guestList = ["mikyle", "kashia", "lara", "marcus", "Brandon", "Selene"];
// let yourName = "mikyle";

// if (guestList.includes(yourName)) {
//     console.log(`Welcome ${yourName}.`);
// }   else {
//     console.log(`Go away, ${yourName}.`)
// }

// let output = [];
// let count = 1;

// function fizzBuzz() {
//     while (count <= 100) {
//         if (count % 15 == 0) {
//             output.push('Fizzbuzz');
//         }  else if (count % 5 == 0 ) {
//             output.push('Buzz');
//         } else if (count % 3 == 0) {
//             output.push('Fizz');
//         } else {
//             output.push(count)
//         }
//         count++;
//     }
//     console.log(output);
// };


// fizzBuzz();


// let people = ["mikyle", "kashia", "lara", "marcus", "Brandon", "Selene"];
// let randomNum = Math.random() * people.length;

// let personPaying = people[Math.floor(randomNum)];
// console.log( personPaying );

// let bottles = 99;
// function beerSong() {
//     console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`);
//     bottles--;
//     console.log(`Take one down and pass it around, ${bottles} bottles of beer on the wall.`);
// };

// while (bottles > 0) {
//     beerSong();
//     if (bottles == 0) {
//         console.log(`No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`)
//     };
// }


// const minutes = 300/60;
// setInterval(sayHello, 1000)

// let timer = 10;
// function countFiveMinutes() {
//     if (timer != 0) {
//         console.log(timer);
//         timer--;
//     }
// };


// function fibonacciSeq(n) {
//     if (n == 1 ) {
//         output = [0];
//     } else if (n == 2) {
//         output = [0, 1];
//     } else {
//         output = [0, 1];
//         for (let index = 0; index < n - 2; index++) {
//             output.push( output[output.length - 1] + output[output.length - 2] )
//         }
//     }
//     return output;
// }

// output = fibonacciSeq(10);
// console.log(output);