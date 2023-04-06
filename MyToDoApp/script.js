let textInput = document.getElementById("text-input");
let submitBtn = document.getElementById("submit-btn");
let listItems = document.getElementById("items");
// let cancelItem = document.getElementById("cancel");

// Functions
//Add to list
function addToList(toDo) {
    listItems.innerHTML += `<li>${toDo}</li>`
}
// remove from list
function removeFromList(toDo) {
    this.innerHTML = "";
}
// Clean the screen
// Add to local storage

// Events
//get input
submitBtn.addEventListener("click", e => {
   addToList(textInput.value);
})
// remove input
// cancelItem.addEventListener("click", e => {
//     removeFromList(e.target)
// })