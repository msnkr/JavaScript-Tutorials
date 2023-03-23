let container = document.getElementById("container");
let number =  document.querySelectorAll("#number");
let symbol = document.querySelectorAll("#symbol");
let screen = document.getElementById("screen");
let firstNum = "";
let secondNum = "";



// Functions

// Get the first Number
function firstNumber(number) {
    screen.innerText = number;
    return +number;
}

// // get symbol and add
// function secondNumber(e) {
//     screen.innerHTML = "";
//     secondNum += e.target.textContent;   
//     console.log(secondNum)
// }

// Add number to screen
function showToScreen(x) {
    screen.innerHTML = x;
}

function addAnimation(x) {
    x.classList.remove("pressed");
}

function add(numA, numB) {
     console.log(numA + numB);
}

function subtract(numA, numB) {
    return numA - numB;
}

function divide(numA, numB) {
    return numA / numB;
}

function multiply(numA, numB) {
    return numA * numB;
}

// Events
container.addEventListener("click", e => {
    if (e.target.classList.contains("number")) {
        firstNum += e.target.textContent;
        firstNumber(firstNum);
    }
})
