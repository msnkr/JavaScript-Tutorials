const container = document.querySelector(".container");
const search = document.querySelector(".form-input");
const btn = document.querySelector(".form-btn");
const grid = document.querySelector(".grid");
const modal = document.querySelector(".modal");

async function getMealData(item) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`);
    const jsonData = await response.json();

    for (let index = 0; index < jsonData.meals.length; index++) {
        let meals = {
            name: jsonData.meals[index].strMeal,
            pic: jsonData.meals[index].strMealThumb,
        };
        
    updateDom(meals)
    }
}

function updateDom(meals) {
    let output = document.createElement("div");
    output.innerHTML = `<img src=${meals.pic}>
    <h3 class="meal-name">${meals.name}</h3>`

    output.classList.add("grid-items");
    grid.appendChild(output);
};

async function showInstructions(meal) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
    const jsonData = await response.json();

    const mealInstuction = jsonData.meals[0].strInstructions;
    modal.classList.add("show");
    modal.innerHTML = `<p class="modal-text">${mealInstuction}</p>`;
}

btn.addEventListener("click", event => {
    event.preventDefault();


    getMealData(search.value);
    search.value = "";
})

grid.addEventListener("click", e => {
    e.preventDefault();

    if (e.target.classList.contains("meal-name")) {
        showInstructions(e.target.textContent);
    }
})

document.addEventListener("click", () => {
    if (modal.classList.contains("show")) {
        modal.classList.remove("show");
    }
})