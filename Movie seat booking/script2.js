let container = document.querySelector(".container");
let seats = document.querySelectorAll(".row .seat:not(.occupied)");
let count = document.getElementById("count");
let total = document.getElementById("total");
let movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
    let selectedSeat = document.querySelectorAll(".row .seat.selected");
    count.innerHTML = selectedSeat.length;
    total.innerHTML = selectedSeat.length * ticketPrice;
    
}

movieSelect.addEventListener("change", e => {
    ticketPrice = movieSelect.value;
    updateSelectedCount();
});


container.addEventListener("click", e => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
        updateSelectedCount();
    };
})