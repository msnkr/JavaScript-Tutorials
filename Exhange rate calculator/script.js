let rateOne = document.getElementById("rate-one");
let rateTwo = document.getElementById("rate-two");

let amountOne = document.getElementById("amount-one");
let amountTwo = document.getElementById("amount-two");

let swapBtn = document.getElementById("swap");
let rateElem = document.getElementById("rate");



// Functions
function swapCurrency() {
    let rateThree = rateTwo.value;
    rateTwo.value = rateOne.value;
    rateOne.value = rateThree;

    calculate();

}


function calculate() {
    let currencyOne = rateOne.value;
    let currencyTwo = rateTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/cff1133872ce15a4672e864e/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
        let rate = data.conversion_rates[currencyTwo];
        rateElem.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
        amountTwo.value = 0;
        amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
}

// Events
rateOne.addEventListener("change", calculate);
rateTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
amountTwo.addEventListener("input", calculate);
swapBtn.addEventListener("click", swapCurrency);

calculate();