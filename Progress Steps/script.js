let progress = document.getElementById("progress");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let circles = document.querySelectorAll(".circle");

let currentActive = 1;


function updateDom() {
    circles.forEach( (circle, index) => {

        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove("active");
        };
    })

    const actives = document.querySelectorAll(".active");

    progress.style.width = ((actives.length -1) / (circles.length -1)) * 100 + "%";

    if (currentActive === 1) {
        prevBtn.disabled = true;
    } else if (currentActive == circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }

}


nextBtn.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    };
    updateDom();
})

prevBtn.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    };
    updateDom()
})