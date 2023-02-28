document.querySelector("#button-1").addEventListener("click", function() {
    text = document.querySelector("#text-box-1")
    console.log(text.value)
})

document.querySelector("#add-text").innerHTML = text.value;