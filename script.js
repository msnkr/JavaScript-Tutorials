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

// let x =4
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

// let age = 87

// if (age >= 14 && age <= 90) {
//     alert(age)
// }
//  5
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

// let age = 87

// if (age >= 14 && age <= 90) {
//     alert(age)
// }


// let i = 0

// while (i < 3) {
//     alert(`Number ${i}!`);
//     i++;
// }



//  ###################### LOOPS ######################
// While loop
// While the condition is truthy, continue to the body

// let i = 1

// while (i <= 3) {
//     alert(i);
//     i++;
// }

// Do while loops
// The loop will first execute the do, then check the condition

// let i = 1

// do {
//     alert(i)
//     i ++;
// } while (i <= 3);

// For loop
// For loop has a begin, a condition, a biody and step

// for (let index = 1; index <=3 ; index++) {
//     alert(index)
// }


// Breaking the loop
// let sum = 0 

// while (true) {
//     let value = +prompt('Enter a number: ');
//     if (!value) {
//         break;
//     }
//     sum += value;
// }
// alert(sum)

// Continue statemment. Skips code if condtions are met
// let x = 1
// for (; x <= 10; x++) {
//     if (x % 2 == 0) {
//         continue
//     };
//     alert(x)
// }

// labels for break/continue

// labels: 
// for (let index = 0; index <= 3; index++) {
//     for (let j = 0; j <= 3; j++) {
//         let input = prompt(`${index}${j}`)
//         if (!input) {
//             break labels;
//         }
//     }
// }

// alert('done')

// for (let index = 0; index <= 10; index++) {
//     if (index % 2 != 0) {
//         continue
//     }
//     alert(index)
// }

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// loopbreak:

// while (true) {
//     let input = +prompt('Enter a number greater than 100: ');
//     if (input > 100) {
//          break loopbreak;
//     } else if (!input && input == ' ') {
//         alert('Please try again')
//     }
// }
// let num;
// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

// let n = 1

// while (n < 10) {
//     if (n % n !== 0) {
//         alert(n);
//         n++;
//     }
// }

// Try again this one above


// switch/case are equity sensitive 
// let x = 10

// switch (x) {
//     case 3:
//         alert('Too small');
//         break;
//     case 10:
//         alert('Just right');
//         break;
//     case 22:
//         alert('toooobig');
//         break;
//     default:
//         alert('Hmmm, Its none')
//         break;
// }

// let browser = prompt('Enter browser').toLowerCase()

// if (browser == 'edge') {
//     alert('You\'ve got the Edge')
// } else if (browser == 'firefox'
//     || browser == 'opera'
//     || browser == 'safari'){
//     alert('We\'ve got that too')
// } else {
//     alert('Hope this page looks okay. ')
// }

// let browser = prompt('Enter browser').toLowerCase()
// switch (browser) {
//     case 'edge':
//         alert('You\'ve got the Edge');
//         break;
//     case 'safari':
//     case 'opera':
//     case 'firefox':
//         alert('We\'ve got those too');
//         break;
//     default:
//         alert('We hope this page looks okay.')
//         break;
// }

// let a = +prompt('a? ', '')

// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert( '2,3' );
//         break;
//     default:
//         break;
// }

//  ###################### FUNCTIONS ######################

// function helloMessage() {
//     alert('Hello World!')
// }

// helloMessage()

// Variables inside a function are only available in that function

// function HelloWorld () {
//     let message = 'Hello World!';
//     alert(message)
// }

// HelloWorld()
// alert(message)

// A function can read a outer variable
// let message = 'World!'

// function outerVar() {
//     alert(`Hello ${message}`)
// }

// outerVar()

// A function can read a outer variable and modify it
// let newName = 'john'

// function editVar () {
//     newName = 'bob'
//     let message = 'Hello ' + newName
//     alert(message)
// }

// alert(newName)
// editVar()
// alert(newName)

// fUNCTION PARAMATERS

// function sayHello(to, from) {
//     alert(`Hello ${to}: \nFrom ${from}`)
// }

// sayHello('John', 'Mikyle')
// sayHello('Steve', 'Mikyle')

// function showMessag(from, text) {
//     alert(`*${from}*`)
// }
// let from = 'Anne';

// showMessag(from, 'Hello');
// alert(from)

// Arguments and paramaters
// If no argment is passed, it will use the default. 


// function showMessage(from, text='There is no text') {
//     alert(`From: ${from} \nText: ${text}`);
// }

// showMessage('Anne', 'Hello there')

// Or

// function showMessage (text) {
//     if (text === undefined);
//     text = 'Default message';
//     alert(text)
// }

// showMessage()

// Or

// function showMessage (text) {
//     text = text || 'Default Message';
//     alert(text)
// }

// showMessage()

// Returning a value 

// function returnValue() {
//     let username = 'Mikyle'
//     return username
// }

// alert(returnValue())

// function returnSum(a ,b) {
//     return a + b
// }

// let sum = returnSum(1, 3)
// alert(sum)

// function checkAge(age) {
//     if (age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }

// let age = prompt('How old are you?: ', 18)

// if (checkAge(age)) {
//     alert('You are of age to vote. ')
// } else {
//     alert('You cannot vote yet. ')
// }

// If a function doesn't return a value, the value will become undefined
// function undefinedValue() {
//     return;
// }

// if (undefinedValue() == undefined) {
//     alert('value is undefined')
// }

// It is recommended to use local variables in a function for cleaner code.
// It is easier to understand a function that gets variables instead of getting outer variables.

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('Did your parents allow you?: ')
//     }
// }

// let ageConfirm = checkAge(19)
// alert(ageConfirm)

// function checkAge(age) {
//     return (age >= 18) ? true : confirm('Do you have persmission?: ');
// }

// alert(checkAge(16))

// function checkAge(age) {
//     return (age >= 18) || confirm('Do you have persmission?: ');
// }

// alert(checkAge(12))

// function min(a, b) {
//     return (a < b) ? a: b;
// }

// alert(min(9, -7))

// function letters () {
//    let letter = 'letterLoop';
//    for(let index = 0; index < letter.length; index++) {
//       console.log(letter.charAt(index));
//    }
// }

// letters()

//  ###################### FUNCTION EXPRESSION ######################

// function sayHi() {
//    alert('Hi');
// }

// sayHi()
// //  let greeting = sayHi
// //  greeting()

// let sayHi = function() {
//    alert('Hi')
// }

// sayHi()

// Callback functions

// function ask(question, yes, no) {
//    if (confirm(question)) yes()
//    else no();
// }

// function showOk() {
//    alert('You agree ')
// }

// function showCancel(){
//    alert('You dont agree')
// }

// ask('Do you agree?: ', showOk, showCancel)

// OR
// function ask(question, yes, no) {
//    if (confirm(question)) yes()
//    else no();
// }

// ask(
//    'Do you agree?: ',
//    function() {alert('You agree');},
//    function() {alert('You dont agree: ');}
// )

//  ###################### FUNCTION EXPRESSION VS FUNCTION DECLARATION######################
// Function declaration can be run anywhere. JavaScript first initializes all the global functions

// sayHi('John')

// function sayHi(name) {
//    alert(`Hello ${name}`)
// }

// Function expressions are created when the execution flow reaches them

// let age = prompt('What is your age?: ', 18)
// let welcome

// if (age >= 18) {
//    welcome = function () {
//       alert('Hello');
//    }
// } else {
//    welcome = function () {
//       alert('Greetings')
//    }
// }
// welcome()

// OR

// let age = prompt('What is your age?: ', 18)
// let welcome = (age >= 18) ?
//    function() {alert('Hello'); }:
//    function() {alert('Greetings'); };

// welcome()

//  ###################### ARROW FUNCTIONS, THE BASICS ######################

// let sum = function (a, b) {
//    return a + b
// }

// alert(sum(1, 3))
// Is the same as

// let sum = (a, b) => a + b
// alert(sum(1, 2))

// If we have one argument, no parenthesis need to be present
// let double = n => n * 2

// alert(double(3))

// If there are no argumtns, parenthesis must still be there
// let sayHi = () => alert('Hi')

// sayHi()

// Arrow functions can be used the same way as function expressions
// let age = prompt('What is your age?: ', 19)
// let welcome = (age >= 18) ?
//    () => alert('Hello') :
//    () => alert('Greetings');

// welcome()
// Multiline arrow functions.
// Sometimes we need more complex function with multiple expressions and statements. We can enclode those in curly braces. They require a return value

// let sum = (a, b) => {
//    let result = a + b;
//    return result
// }

// alert(sum(2, 4))

// Arrow funcrions are handy for one liners and simple tasks

// function ask(question, yes, no) {
//    if (confirm(question)) yes();
//    else no()
// }

// ask('Do you agree?: ',
// function() {alert('You agree. '); },
// function() {alert('You do not agree...');}
// )

// let ask = (confirm('Do you agree?')) ? 
//    () => alert('You agree') :
//    () => alert('You dont agree');

// ask()

//  ###################### STYLE GUIDE ######################

// function pow(x, n) {
//   let result=1;
  
//   for (let i = 0;i < n;i++) {
//    result*=x;
//    }
//    return result;
// }

// let x = prompt("x?", ''), n=prompt("n?", '');
// if (n<=0) {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
//    } else {
//   alert( pow(x,n) );
// }

//  ###################### TESTING ######################
// Read testing with mocha.

//  ###################### OBJECTS ######################

// let user = new Object() key value pair

// let user = {
//    'name': 'John',
//    'age': 31,
// }

// alert(`User 1 is ${user.name}. He is ${user.age} years old. `)
// user.isAdmin = true
// alert(user.isAdmin)

// // Remove property
// delete(user.age)
// alert(user.age)

// We can also add multiword keys. WHen working with multiword keys, use the brackets. JS won't understand user.likes birds
// let user = {
//    'name': 'John',
//    'age': 31,
//    'Likes birds': true,
// };

// alert(`User 1 is ${user.name}. He is ${user.age} years old. Likes birds?: ${user['Likes birds']}`)

// Square brackers also provide a way to obtain the result of any expression. Like from a variable

// let user = {
//    'name': 'Mikyle',
//    'age': 31,
// };

// let test = prompt('What is the new name?: ', name);
// alert( user[test] )

// let user = {
//    'name': 'peelkop',
//    'age': 'peelage',
// }

// let otherName = prompt('Which info to get?: ')
// alert( user[otherName] )

// We can user square brackers when creating a onject key.
// let fruits = prompt('Add a fruit');

// let bag = {
//    [fruits]: 5,
// }
// alert( bag.apple )

// This looks nicer
// let fruit = prompt('What fruit do you want to add?: ')

// let bag = {}
// bag['fruit'] = 5
// alert(bag['fruit'])

// shorthand version
// function makeUser(name, age) {
//    return {
//       name,
//       age
//    };
// };

// let user = makeUser('Mikyle', 31)
// alert( user.name )

// You can use the normak version and shorthand together.
// function makeUser(name, age) {
//    return {
//       name,
//       age: 31
//    };
// };

// let user = makeUser('mikyle')
// alert( user.age )

// There are no loimitations to variable names, you can also used reserved words in objects

// let weirdVariables = {}
// weirdVariables['for'] = 1;
// weirdVariables['in'] = 2;

// alert( 'for ' + weirdVariables['for'] + ' in ' + weirdVariables['in'] ) 

// The in keyword.
// The syntax is : "key" in object

// let names = {}
// names['name'] = 'mikyle'

// alert( 'name' in names ) // Will return true
// alert( 'ag' in names ) // WIll return false 
// You can use undefined, but this in property is to find a udefined property

// The for in loop is to loop through all propeties of an object.

// function makeUser(name, age, isAdmin) {
//    return {
//       name,
//       age,
//       isAdmin,
//    };
// };

// let user = makeUser('Mikyle', 31, true);
// // alert( user['isAdmin'] )

// for (let prop in user) {
//    alert(user[prop]);
// }

// Objects are ordered in a special fashion

// let codes = {
//    '49': 'germany',
//    '27': 'south africa',
//    '44': 'Uk',
// }

// for (let prop in codes) {
//    alert( prop )
// }

// You can cheat this by changing the numbers into strings.

// let codes = {
//    '+49': 'germany',
//    '+27': 'south africa',
//    '+44': 'Uk',
// }

// for (let prop in codes) {
//    alert( codes[props] )
// }

// let user = {}
// user.name = 'John'
// user.surname = 'Smith'
// user['name'] = 'Pete'
// delete user.name

// for (let prop in user) {
//    alert( user[prop] )
// }

// Tests REREAD THE TESTS SECTION

// let salaries = {
//    'John': 100,
//    'Smith': 160,
//    'Pete': 130,
// };

// let result = 0;
// for (let property in salaries) {
//    result += salaries[property];
// };

// alert(result)


// let menu = {
//    'width': 200,
//    'height': 300,
//    'title': 'My Menu'
// };

// function multipleNumericObj(menu) {
//    for (let property in menu) {
//       if (menu[property] === (+menu[property])) {
//          menu[property] = menu[property] * 2;
//       };
//    };
// };

// multipleNumericObj(menu);

// for (let property in menu) {
//    alert(menu[property])
// }

//  ###################### OBJECTS AND REFERENCES ######################

// let user = {'name': 'John'}
// let admin = user

// admin['name'] = 'Pete'
// alert(user['name'])



// Cloning and merging object.assign

// let user = {
//    'name': 'John',
//    'age': 30,
// }

// let clone = {}

// for (let key in user) {
//    clone[key] = user[key];
// }

// clone['name'] = 'Pete'

// alert( user['name'] )
// alert( clone['name'] )

// We can also use the object assign method
// The syntax is Object.assign(dest, source1, source2, ..)
// This copies all the sources to the destination

// let user = { name: 'John' };
// let persmission1 = { canView: true };
// let permission2 = { canEdit: true };

// Object.assign(user, persmission1, permission2)

// alert( user.canView )
// alert( user.canEdit )

// If the copied property already exists, it overwrites it.
// let user = { name: 'John' };
// Object.assign(user, { name: 'Pete' });

// alert( user.name );

// We can also use Object.assign to do simple object cloning.

// let user = { name: 'John' };
// let clone = Object.assign( {}, user )

// alert( clone.name )


// Nested cloning.
// let user = {
//    name: 'John',
//    age: 30,
//    sizes: {
//       height: '180cm',
//       weight: '80kg',
//    }
// };


// let clone = Object.assign({}, user);
// alert ( user.sizes === clone.sizes ); // returns the same object


// alert( user.sizes.height );
// clone.sizes.height = '182cm';
// alert( user.sizes.height ); // Clone and user share the same object

// To fix this error, we can use the structuredClone(object) method
// let clone = structuredClone(user);
// alert( user.sizes === clone.sizes ); //returns false, different object

// alert( user.sizes.height );
// clone.sizes.height = '182';
// alert( user.sizes.height )

//  ###################### This ######################
// Method examples

// let user = {
//    name: 'John',
//    age: 30,
// };

// user.sayHi = function () {
//    alert( 'Hello World! ')
// };

// for (let key in user) {
//    console.log( user[key] );
// };

// user.sayHi()

// Here we used a function expression to create a function and assign it to the propperty sayHi of the object.
// Then we call it as user.sayHi. THe user can now speak. 
// The function that is the property of the ibject is called a method. 
// So here we have the method sayHi() and the object is user. 

// The shorthand.
// let user = {
//    name: 'John',
//    age: 31,
//    sayHi: function () {
//       alert( 'Hello World!' )
//    }
// };

// user.sayHi()

//  Even shorthand we can omit the word function
// let user = {
//    name: 'John',
//    age: 31,
//    sayHi() {
//       alert ( 'Hello Wolrd!' )
//    }
// };

// user.sayHi()

// This in methods
// It is common that an object method needs to access the information stored in the object to do its job.
// For instance, sayHi may need the name of the user.

// let user = {
//    name: 'John',
//    age: 31,
//    sayHi() {
//       alert( this.name )
//    }
// }

// user.sayHi()

// It is possible to use user.name but this method is unreliable because user = admin and this can change.
// Example

// let user = {
//    name: 'John',
//    age: 31,
//    sayHi() {
//       alert( user.name )
//    }
// }

// let admin = user;
// user = null;
// admin.sayHi()

// let nameA = {name: 'John'}
// let nameB = {name: 'Mike'}

// function sayHi() {
//     alert( this.name );
// }

// nameA.f = sayHi;
// nameB.f = sayHi;

// nameA.f()
// nameB.f()

// If there is a this in a function, it expects to be called in a object context.

// function makeUser () {
//     return {
//         name: 'John',
//         ref: this,
//     };
// };

// let user = makeUser;
// alert( user.ref.name )

