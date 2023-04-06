
let textInput = document.getElementById("text-input");
let submitBtn = document.getElementById("submit-btn");
let listItems = document.getElementById("items");
let bodyCancelBtn = document.body;


let toDoList = [];
// populateUi();

// Functions
//Add to list
function addToList(toDo) {
    if (toDo !== "") {
        listItems.innerHTML += `<li class="toDoItem"> ${toDo} </li>`;
        toDoList.push(toDo)
    }
}

// remove from list
function removeListItem(e) {
    e.target.remove();
}

// Add to local storage
function addToStorage(providedData = toDoList) {
    localStorage.setItem("ListItems", JSON.stringify(providedData))
}

// function populateUi() {

// }

// Events
//get input
submitBtn.addEventListener("click", () => {
   addToList(textInput.value);
   textInput.value = "";
})

// remove input
bodyCancelBtn.addEventListener("click", e => {
    if (e.target.classList.contains("toDoItem")) {
        removeListItem(e)
    }
})