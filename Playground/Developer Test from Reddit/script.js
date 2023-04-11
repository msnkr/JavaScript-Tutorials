let signUpBtn = document.getElementById("sign-up");
let formMain = document.getElementById("form-main");
let cancel = document.getElementById("cancel-btn");


signUpBtn.addEventListener("click", () => formMain.classList.remove("hidden"))
cancel.addEventListener("click", () => formMain.classList.add("hidden"))