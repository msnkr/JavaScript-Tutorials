const grid = document.querySelector(".grid");
const file = document.getElementById("file-upload");

function updateDOM(content) {
    content.forEach(element => {
        if (element != "") {
           let output = document.createElement("div");
           output.innerHTML = `<div class="box grid-item" style="background-color: ${element}"><h1>${element}</h1></div>`
           grid.appendChild(output);
        };
    });
}

function splitContents(contents) {
    const delimeter = "\n";
    const content = contents.split(delimeter);

    updateDOM(content);
}

// open the file
file.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const contents = e.target.result;
        splitContents(contents);
    }

    reader.readAsText(file)
})


// Get items from file and store in array
// Loop through each item and give it a box class, and change the background and wording to fit the box in main
// Every fourth box, create a new box parent element