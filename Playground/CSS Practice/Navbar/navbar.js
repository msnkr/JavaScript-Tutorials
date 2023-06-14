const nav = document.querySelector(".nav");
const ul = document.querySelector(".ul");
const a = document.querySelectorAll("a");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    nav.classList.toggle("hide");
    ul.classList.toggle("hide");

    a.forEach(e => {
        e.classList.toggle("hide");
    });
    
    btn.classList.toggle("hide");
})