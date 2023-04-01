let main = document.getElementById("main");
let addUserBtn = document.getElementById("add-user");
let doubleBtn = document.getElementById("double");
let showMillionairesBtn = document.getElementById("show-millionaires");
let sortBtn = document.getElementById("sort");
let calculateWealthBtn = document.getElementById("calculate-wealth");

// Store data you recieve
let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Functions
// Fetch random user and add money
async function getRandomUser() {

    let res = await fetch("https://randomuser.me/api");
    let data = await res.json()

    let user = data.results[0]
    
    let newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor( Math.random() * 1000000 ),
    };
    addData(newUser);
}


// Double money using map function
function doubleMoney() {
    data = data.map(user => {
        return { ...user, money:user.money * 2 };
    })
    updateDom();
}

// Add new user data to data array
function addData(obj) {

    data.push(obj)
    updateDom();
}

// Update DOM with random user data
function updateDom(providedData = data) {
    // Clear the main div
    main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>";

    providedData.forEach( i => {

        let element = document.createElement("div");
        element.classList.add("person");
        element.innerHTML = `<strong>${i.name}</strong>${formatMoney(i.money)}`

        main.appendChild(element)
    })
}

// Sort by richest using sort method
function sortByRichest() {
    data.sort( (a, b) => b.money - a.money );

    updateDom();
}

// Format money as a currency - taken from stackoverflow
function formatMoney(money) {
    return "$" + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Events
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);