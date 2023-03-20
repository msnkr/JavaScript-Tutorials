let container = document.getElementById("container");
let number =  document.querySelectorAll("#number");
let symbol = document.querySelectorAll("#symbol");
let screen = document.getElementById("screen");


// Functions
function displayOnScreen(num) {
    screen.innerHTML = num;
}

function add(numA, numB) {
    return numA + numB;
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
        let numA = +e.target.textContent;
        displayOnScreen(numA);
    } else {
        let sym = e.target.textContent;
    }

})
