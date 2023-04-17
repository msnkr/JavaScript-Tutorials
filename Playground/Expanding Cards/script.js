// Grab each panel
// On click, we need to remove any active classes first before adding a new active class

const panels = document.querySelectorAll("#panels");


function removeActiveClass() {
    panels.forEach( panel => {
        panel.classList.remove("active")
    } )
}


panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClass();
        panel.classList.add("active");
    })
})

