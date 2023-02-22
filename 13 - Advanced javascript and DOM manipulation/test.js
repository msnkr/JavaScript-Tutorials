/*
Higher order functions.
*/

// function add(num1, num2) {
//     return num1 + num2
// };

// function subtract(num1, num2) {
//     return num1 - num2
// };

// function multiply(num1, num2) {
//     return num1 * num2
// };

// function divide(num1, num2) {
//     return num1 / num2
// };

// function calculator(num1, num2, operator) {
//     return operator(num1, num2)
// };

// calculator(3, 3, divide);

/*
Constructor Functions
*/

function HouseKeeper(yearsOfExperience, name, cleaningAreas) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningAreas = cleaningAreas;
    this.clean = function() {
        console.log(`${this.name} is busy cleaning.`)
    }
};

let houseKeeper1 = new HouseKeeper(12, "Jane", ["Bathroom", "Kitchen", "Living Room"])
let houseKeeper2 = new HouseKeeper(3, "Betsy", ["Bathroom", "Patio"])

houseKeeper1.clean() ;

