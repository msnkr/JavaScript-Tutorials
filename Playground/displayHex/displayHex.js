const grid = document.querySelector(".grid");
const file = document.getElementById("file-upload");
const darkMode = document.querySelector(".fa");


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



file.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const contents = e.target.result;
        splitContents(contents);
    }

    reader.readAsText(file)
})
