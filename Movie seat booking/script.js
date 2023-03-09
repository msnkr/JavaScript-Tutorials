let container = document.querySelector(".container");
let seats = document.querySelectorAll(".row .seat:not(.occupied)");
let count = document.getElementById("count");
let total = document.getElementById("total");
let movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

// FUNCTIONS
// Update total and count
function updateSelectedCount() {
    let selectedSeats =  document.querySelectorAll(".row .seat.selected");
    let selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;

    total.innerText = selectedSeatsCount * ticketPrice;
}


// EVENTS
// Movie select event
movieSelect.addEventListener("change", (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})


// Seat click event
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
})