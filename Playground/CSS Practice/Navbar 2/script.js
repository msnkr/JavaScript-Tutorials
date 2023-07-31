const xBtn = document.querySelector(".btn");
const ulList = document.querySelector(".list-items");
const links = document.querySelectorAll(".list-item");

xBtn.addEventListener("click", () => {
  ulList.classList.toggle("hidden");
  links.forEach((link) => {
    link.classList.toggle("hidden");
  });
});
