let panels = document.querySelectorAll(".quote");


function removeActiveClass(panels) {
    panels.forEach(panel => panel.classList.remove("active"))
}

panels.forEach( panel => {
    panel.addEventListener("click", () => {
        
        removeActiveClass(panels)
        panel.classList.toggle("active")
    })
} )