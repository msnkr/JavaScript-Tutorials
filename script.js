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

// If any of the operands are a string then the other will be converted to a string too
// alert('1' + 5 + 5)
// A more complex example, if math infront of string it will apply the math first and then the string
// alert(2 + 2 + '1')

