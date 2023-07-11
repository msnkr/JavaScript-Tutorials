const images = document.querySelectorAll(".image");
const calcImage = document.querySelectorAll(".calc-image");
const arrowBtn = document.querySelectorAll(".arrow");

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

arrowBtn.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    let arrowElement = event.target;
    let imgElement =
      arrowElement.parentNode.nextElementSibling.querySelector("img");
    imgElement.classList.toggle("hidden");
    let ulElement =
      arrowElement.parentNode.nextElementSibling.nextElementSibling;
    ulElement.classList.toggle("hidden");
  });
});
