const container = document.querySelector(".container");
const search = document.querySelector(".form-input");
const btn = document.querySelector(".form-btn");


async function getMealData(item) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`);
    const jsonData = await response.json();

    for (let index = 0; index < jsonData.meals.length; index++) {
        console.log(jsonData.meals[index].strMeal);
        console.log(jsonData.meals[index].strMealThumb);
    }

}

btn.addEventListener("click", event => {
    event.preventDefault();


    getMealData(search.value);
    search.value = "";
})