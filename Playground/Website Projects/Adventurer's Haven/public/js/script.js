const images = document.querySelectorAll(".image");
const calcImage = document.querySelectorAll(".calc-image");
const showMoreBtn = document.querySelectorAll(".show-items");

// Events
images.forEach((image) => {
  image.addEventListener("mouseover", (e) => {
    e.target.classList.add("active");
  });

  image.addEventListener("mouseout", (e) => {
    e.target.classList.remove("active");
  });
});

calcImage.forEach((image) => {
  image.addEventListener("mouseover", () => {
    let paragraphText = image.querySelector(".calc-text");
    paragraphText.classList.add("active");
  });

  image.addEventListener("mouseout", () => {
    let paragraphText = image.querySelector(".calc-text");
    paragraphText.classList.remove("active");
  });
});
