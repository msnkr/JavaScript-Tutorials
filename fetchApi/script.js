let getText = document.getElementById("get-text"),
    getTextOutput = document.getElementById("get-text-output");

function getTextFunc() {
    fetch("sample.txt")
    .then(res =>  res.text())
    .then(data => {
        getTextOutput.innerHTML = data;
    }); 
}



getText.addEventListener("click", getTextFunc);