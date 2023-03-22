let container = document.getElementById("container");
let number =  document.querySelectorAll("#number");
let symbol = document.querySelectorAll("#symbol");
let screen = document.getElementById("screen");
let firstNum = "";
let secondNum = "";



// Functions
// Add number to screen

function showToScreen(x) {
    screen.innerHTML = x;
}

function addAnimation(x) {
    x.classList.remove("pressed");
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
        btnPressed = e.target;
        btnPressed.classList.add("pressed")
        firstNum += btnPressed.textContent;
        setInterval(addAnimation, 100, btnPressed);
        showToScreen(+firstNum)
    } else if (e.target.classList.contains("symbol")) {
        symPressed = e.target;
        symPressed.classList.add("pressed")
        setInterval(addAnimation, 100, symPressed);
        screen.innerHTML = "";
    }
})