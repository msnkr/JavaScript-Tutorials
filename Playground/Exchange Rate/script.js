let inputUSD = document.getElementById("number-input");
let currentPrice = document.getElementById("currency-span");
let currencyConverted = document.getElementById("currency-converted");


function updateDom(single, total) {

    currentPrice.innerHTML = single;
    currencyConverted.innerHTML = total;

}



inputUSD.addEventListener("change", () => {
    fetch("https://v6.exchangerate-api.com/v6/cff1133872ce15a4672e864e/latest/USD")
    .then(res => res.json())
    .then(data => {
        let singleMoney = (data.conversion_rates.ZAR).toFixed(2);
        let moneyData = (singleMoney * inputUSD.value).toFixed(2);
        
        updateDom(singleMoney, moneyData);
    })
});
