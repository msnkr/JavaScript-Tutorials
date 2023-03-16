let searchBox = document.getElementById("search");
let submitButton = document.getElementById("add-btn");
// let cancelButton = document.getElementById("cancel-btn");
let task = document.getElementById("tasks");
let taskArr = [];


// Functions
// Add task to html
function addTask(item) {
    task.innerHTML = `
    <div class="task">
        <h3>${item}</h3>
        <button class=""><i class="fa fa-times" aria-hidden="true"></i></button>
    </div>
    `
}

// Remove task from html

// Events
submitButton.addEventListener("click", e => {
    e.preventDefault();
    
    addTask(searchBox.value);
    searchBox.value = "";
    
})

// cancelButton.addEventListener("click", e => {
//     e.preventDefault();

// })