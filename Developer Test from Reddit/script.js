// Match username and value with var
// If dont match, show error
// Else show login successful

// Grab username and password inputs
// Grab the submit button
// Grab the small tag

// create a function that takes the username and password value and checks them against the "random" ones

let randomUsername = "john"
let ramdomPassword = "mrSmith"

let username = document.getElementById("username").value;
let password = document.getElementById("password");
let submitBtn = document.getElementById("submit-btn");
let smallTag = document.querySelector("small")




function checkCreds() {
    if (username !== randomUsername || username == "" || password.value !== ramdomPassword || password.value == "") {
        smallTag.classList.remove("hide")
        smallTag.classList.add("incorrect")
        location.reload();
    } else {
        smallTag.classList.remove("hide")
        smallTag.classList.add("correct")
        smallTag.innerHTML = "Correct";
    }
}


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    checkCreds()
})