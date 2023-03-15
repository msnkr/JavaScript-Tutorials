let searchBox = document.getElementById("search");
let submitButton = document.getElementById("add-btn");
// let cancelButton = document.getElementById("cancel-btn");
let task = document.getElementById("task");
let taskArr = [];


// Functions
// Add task to html
function addTask(item) {
    task.innerHTML = `
    <div class="task">
        <h2>${item}</h2>
        <button class=""></button>
    </div>
    `
}

// Remove task from html

// Events
submitButton.addEventListener("click", e => {
    e.preventDefault();
    
    addTask(searchBox.value);
})

// cancelButton.addEventListener("click", e => {
//     e.preventDefault();

// })