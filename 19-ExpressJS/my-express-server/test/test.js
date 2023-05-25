const test = document.querySelector(".test");
const body = document.querySelector("body");


test.addEventListener("mouseover", () => {
    body.classList.add("dark");
})

test.addEventListener("mouseout", () => {
    body.classList.remove("dark");
})