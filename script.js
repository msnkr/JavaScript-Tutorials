'use strict';

// alert('i\'m JavaScript');

// For single line comments

//  ###################### Variables ######################

// let message = 'Hello. This is a variable'
// alert(message)

//  Multiple variables in one line.
// Single line is recommended though.
// let user = 'Mikyle', age = 31, message = 'Hello, World!';
// alert(user + ' is ' + age + ' years old. He says ' + message)

// let hello = 'Hello, World!';
// let message

// message = hello
// alert(message)
// Variables are only declared once and should be referred to without let. 
//  Variables use camelcase
// Can't name variables that js uses. 
// To declare a constant, label the variable const. It's common to see const in capital letters

// const COLOR_BLUE = "#00F";
// color = COLOR_BLUE

// let admin;
// let name1 

// name1 = 'John'
// admin = name1

// alert(admin)

// let ourCurrentPlanet = 'earth'
// let currentUserName

//  ###################### Data Types ######################

// alert(1 / 0)

// NaN is a computational error. Such as dividing a string and integer. NaN is sticky, Any further mathematical error will result in NaN.
// alert('string'/ 1)

// f-strings in JS are ${variable}.
// let ourCurrentPlanet = 'earth'
// alert(`Our planet is ${ourCurrentPlanet}`)
// let sum = 1 + 2;
// alert(`the total is ${sum}`)

//  Booleans
// let isGreater = 4 > 1
// alert(`${isGreater}`)

// Null doesn't mean zero. It means the value is unknown.
// let age = null
// alert(`${age}`)

//  Undefined means value is unknown
// let age
// alert(`${age}`)

//  typeof is like type in python
// alert(`${typeof 0}`)
// alert(`${typeof 'foo'}`)
// alert(`${typeof true}`)

//  ###################### Interaction ######################
// You already know alert, It is modal

// Prompt. Don't forget to use the let to store the result. Returns null if cancelled is pressed.
// let result = prompt('Test');
// alert(`${result}`);

// Comfirm brings up a modal winfdow and returns true or false.
// let isBoss = confirm('Are you the boss?: ');
// alert(`${isBoss}`);

//  ###################### F- String ######################
// let myName = prompt('What is your name?: ')
// alert(`${myName}`)

// String conversion

// let item = true
// alert(String(item))

//  ###################### Type COnversion ######################

// Automatic conversion
// alert('6' / '2')

// Explicit conversion is required when we read a value from a string based form that requires a number
// let num = '123'
// alert(Number(num))

// Numerica conversion rule. Undefined becomes NaN. Null becomes 0 and true or false becomees 1 and 0.
//  Values that are empty becomes false otherwise become true

//  ###################### Maths ######################

// let x = 5
// let y = 3
// alert(x - y)

// let x = 1, y = 7
// alert(x * y)

// Returns the remainder
// alert(5 % 2)

// Returns true
// alert(10 % 2 == 0)


//  ###################### String concatation ######################


// let s = 'Hello'
// let x = 'World!'
// alert(s + ' ,' + x)

// Binarty +
// If any of the operands are a string then the other will be converted to a string too
// alert('1' + 5 + 5)
// A more complex example, if math infront of string it will apply the math first and then the string
// alert(2 + 2 + '1')

//  Unary +
// If used by itself, can convert to numbers
// let x = 1
// alert( typeof +x) 

// let y = -2
// alert(typeof +y)
// alert(+true)

// Example
// let oranges = '2'
// let apples = '3'
// alert(apples + oranges)

// If you want to convert them to numbers, you need to sum them.
// alert(+oranges + +apples)
// Unary pluses take a higher precedence than the add sign
// JavaScript applies bodmas but is called the precedence tool
// = is also an assigment but it takes last precedence thats why we can use it to store values.

// Example
// let a = 1
// let b = 2

// let c = (a = b + 1)
// alert(c)

// Modify in place
// let a = 3
// a += 4
// a *=2
// alert(a)

// Increment and deincrement
// let counter = 2
// counter ++
// counter --
// alert(counter)
//  Increment and deincrement only work on variables, not numbers
// Remember, when using immedaiate postfix and prefix forms, let a = 2, alert(++a) with return 3. Whereas let a = 2, alert(a++) will return the original a
// let a = 2
// alert(++a)


//  ###################### REREAD OPERATORS WITH JAVASCRIPT ######################


// let a = prompt("First number?", 1);
// console.log(typeof a );

// let b = prompt("Second number?", 2);
// console.log(typeof b );


// alert(+a + +b); // 12
// OR

// let a = +prompt("First number?", 1);
// console.log(typeof a );

// let b = +prompt("Second number?", 2);
// console.log(typeof b );


// alert(+a + +b); // 12

//  ###################### COMPARISONS ######################
// Comparisons are similar to python except for the strict equality check.

// let a = 'name', b = 'name'
// alert(a == b)

// let a = 'name'
// let b = 'nam'
// alert(a < b)

// Comparisons of different data types
// alert('2' > 1)
// alert('01' == 1)

// Regular equality checks have a problem.
// alert(0 == false)
// alert('' == false)
//  BEcause of operands of different types are converted to numbbers. STrict equality check doesn;t convert types
// alert(0 === true)
// alert(0 === 0)

// There is also stict inequality types.
// alert(0 !== false)

// null == 0, undefined becomes NaN
// alert(null == undefined)
// alert(null === undefined)

// These errors will come up, to fight them, dont use comparisons with null or undefined.

//  ###################### IF STATEMENT ? ######################
// The if statement works like python, except if the condition in the parenthesis is true, then execute the block of code.

// let year = prompt('In which year was ECMAScript-2015 specification published?', '')
// if (year == 2015) {
//     alert('You are correct')
// }

// IF statements check to see if the conditon is true or false. Did you forget about truthy and falsy?
// '', 0, NaN, undefined, and false with always return false because they are falsy

// elseif statements
// let answer = prompt('In which yeaconditionr was ECMAScript-2015 specification published?', '');
// console.log(answer);

// if (answer < 2015) {
//     alert('Too early');
// } else if (answer > 2015) {
//     alert('Too late');
// } else {
//     alert('You are correct');
// }

//  Conditional operator ?
// let result = condition ? value1 : value2;

// let accessAllowed = (10 < 18) ? true : false;
// alert(accessAllowed)

//  Multiple ?
// let age = prompt('What is your age? ', 18)
// let message = (age < 3) ? 'Hi Baby' :
//     (age < 18) ? 'Hello' : 
//     (age == 18) ? 'You are old enough' :
//     (age < 100) ? 'Greetings' :
//     'What an unusual age';
// alert(message)

// ? to replace if. Not recommended
// let company = prompt('Which company created JavsScript?: ');
// (company == 'Netscape') ?
//     alert('Right') : alert('Wrong');

// let a = 10;
// let b = 0;
// let result;

// (a + b < 4) ? result = 'Below' : result = 'Over';
// alert(result)

// let login = prompt('Who: ');
// let message;

// (login == 'Employee') ? message = 'Welcome' :
// (login == 'Director') ? message ='Greetings' :
// (login == '') ? message ='No login' :
// '';

// alert(message)

//  ###################### LOGICAL OPERATORS ######################
// OR returns the first truthy value and stops


// let hour = 14
// if (hour > 18 || hour < 8) {
//     alert('The office is closed')   
// } else {
//     alert('The office is open')
// }

// let hour = 12
// let isWeekend = true
// if (hour < 8 || hour > 18 || isWeekend) {
//     alert('The office is closed. ')
// }

// If all variables were falsy, anonymous would show up.
// let firstName = ''
// let secondName = ''
// let lastName = ''
// alert (firstName || lastName || secondName || 'Anon')

// Getting the first truthy value from the list
// let firstName = ''
// let secondName = ''
// let lastName = 'anon'

// alert (firstName || lastName || secondName)


// AND finds the first false value and stops

// alert(1 && 2 && 3) returns the last value because they are all truthy
// alert(1 && 2 && null && 4)  retyrns the first falsy

// let age = 22
// if (age > 14 && age < 90) {
//     alert(age)
// }

// let age = 32
// if (!(age >= 14 && age <= 90)) {
//     alert(age)
// } else {
//     alert(`The age is ${age}`)
// }

let login = prompt('What is your username?: ').toLowerCase();
if (login == 'admin') {
    let password = prompt(`Welcome ${login}. Enter your password: `).toLowerCase();
    if (password == null || password == '') {
        alert('Cancelled');
    } else if (password == 'themaster') {
        alert('Welcome')
    } else {
        alert('I don\'t know you. ');
    }
} else if (login == null) {
    alert('Cancelled')
} else {
    alert('I don\'t know you');
}













