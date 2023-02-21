// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked")
// })

for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function() {
        alert("I got clicked")
    })
}