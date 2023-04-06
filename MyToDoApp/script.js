let textInput = document.getElementById("text-input");
let submitBtn = document.getElementById("submit-btn");
let listItems = document.getElementById("items");
let bodyCancelBtn = document.body;


// Functions
//Add to list
function addToList(toDo) {
    if (toDo !== "") {
        listItems.innerHTML += `<li> ${toDo} <button class="cancel-btn"><i class="fa fa-times"></i></button> </li>`;
    }
}
// remove from list
// function removeListItem(e) {
//    console.log(e);
// }
// Add to local storage

// Events
//get input
submitBtn.addEventListener("click", () => {
   addToList(textInput.value);
   textInput.value = "";
})
// remove input
bodyCancelBtn.addEventListener("click", e => {
    if (e.target.classList.contains("fa-times")) {
        console.log(e)
    }
})