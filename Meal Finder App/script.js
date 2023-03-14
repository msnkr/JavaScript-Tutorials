let search = document.getElementById("search"), 
    submit = document.getElementById("submit"), 
    random = document.getElementById("random"),
    mealsEl = document.getElementById("meals"), 
    resultHeading = document.getElementById("result-heading"),
    single_mealEl = document.getElementById("single-meal"),
    emptySearchTerm = document.getElementById("no-input");

// Functions
// Search meals and fetch from DB
function searchMeals(e) {
    e.preventDefault();

    // Clear single meal
    single_mealEl.innerHTML = "";

    // Get search team
    let term = search.value;
    
    // Check for emptty
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`).then(res => res.json()).then(data => {
            console.log(data)
            resultHeading.innerHTML = `<h2>Search result for ${term}:</h2>`;

            if (data.meals == null) {
                resultHeading.innerHTML = "<p>There are no search results. Try again.</p>"
            } else {
                mealsEl.innerHTML = data.meals.map(meal => 
                    `
                    <div class="meal">
                        <img src="${meal.strMealThumb}"/ alt="${meal.strMeal}">
                        <div class="meal-info" data-mealID="${meal.idMeal}">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>
                    `
                ).join('')
            }
        })
        // Clear search text
        search.value = '';
    } else {
        alert("Nothing was entered. Please try again.");
    }
}

// Events
submit.addEventListener("submit", searchMeals);
    