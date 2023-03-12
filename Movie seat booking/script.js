let container = document.querySelector(".container");
let seats = document.querySelectorAll(".row .seat:not(.occupied)");
let count = document.getElementById("count");
let total = document.getElementById("total");
let movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

populateUi();

// FUNCTIONS
// Get movie data and populate UI
function populateUi() {
    let selectedSeats = JSON.parse( localStorage.getItem("selectedSeats") );
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        })
    }
}


// Save movie data
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("movieName", movieIndex);
    localStorage.setItem("moviePrice", moviePrice);
};

// Update total and count
function updateSelectedCount() {
    let selectedSeats =  document.querySelectorAll(".row .seat.selected");

    let seatIndex = [...selectedSeats].map( seat =>  [...seats].indexOf(seat));
    localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));
    

    let selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;

    total.innerText = selectedSeatsCount * ticketPrice;
};

// EVENTS
// Movie select event
movieSelect.addEventListener("change", e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// Seat click event
container.addEventListener("click", e => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
});