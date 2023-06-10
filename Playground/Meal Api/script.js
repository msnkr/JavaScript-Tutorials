const container = document.querySelector(".container");
const search = document.querySelector(".form-input");
const btn = document.querySelector(".form-btn");
const grid = document.querySelector(".grid");

async function getMealData(item) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`);
    const jsonData = await response.json();

    for (let index = 0; index < jsonData.meals.length; index++) {
        let meals = {
            name: jsonData.meals[index].strMeal,
            pic: jsonData.meals[index].strMealThumb,
            instructions: jsonData.meals[index].strInstructions
        };
        
    updateDom(meals)
    }
}

function updateDom(meals) {
    let output = document.createElement("div");
    output.innerHTML = `<img src=${meals.pic}>
    <h3>${meals.name}</h3>`

    output.classList.add("grid-items");
    grid.appendChild(output);
};

btn.addEventListener("click", event => {
    event.preventDefault();

    getMealData(search.value);
    search.value = "";
})