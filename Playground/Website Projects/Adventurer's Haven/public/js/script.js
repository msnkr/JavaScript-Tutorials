const images = document.querySelectorAll(".image");

// Events
images.forEach((image) => {
  image.addEventListener("mouseover", (e) => {
    e.target.classList.add("active");
  });

  image.addEventListener("mouseout", (e) => {
    e.target.classList.remove("active");
  });
});
