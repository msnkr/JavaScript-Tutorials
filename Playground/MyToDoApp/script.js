const search = document.querySelector(".add-item");
const submitBtn = document.querySelector(".submit-btn");
const ulContainer = document.querySelector(".item-here");


// 2.Put value in list.
let itemList = ['Do washing', "Do dishes"];

// Loop over list with key-value pair.
// Display items from list on dom
function updateDom(item) {
    ulContainer.innerHTML += `<li>${item}</li>`
}


// 1.On submit-btn get the value from input.
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    updateDom(search.value)
    search.value = "";
})
