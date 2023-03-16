let searchBox = document.getElementById("search");
let submitButton = document.getElementById("add-btn");
let cancelButton = document.getElementById("cancel-btn");
let task = document.getElementById("tasks");
let taskArr = [];

// Functions
function allItemsInArr() {
    console.log(taskArr)
    taskArr.forEach((x, i) => {
        task.innerHTML = `<div><h4>${i + 1}: ${x}</h4>
        <button class="cancel-btn" id="cancel-btn"><i class="fa fa-times fa-2x"></i></button></div>`
    })
}
// display all items in array
// remove items in array


// Events
submitButton.addEventListener("click", e => {
    e.preventDefault();

    taskArr.push(searchBox.value);
    allItemsInArr()
    searchBox.value.innerHTML = "";
})

// cancelButton.addEventListener("click", e => {

// })