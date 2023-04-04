let toggle = document.getElementById("toggle");
let close = document.getElementById("close");
let open = document.getElementById("open");
let modal = document.getElementById("modal");

// Events
toggle.addEventListener("click", () => document.body.classList.toggle("show-nav"));
open.addEventListener("click", () => modal.classList.add("show-modal"));
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal when clicked anywhere else
window.addEventListener("click", e => e.target == modal ? modal.classList.remove("show-modal") : false);