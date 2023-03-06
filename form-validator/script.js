const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


// Functions

// Check if email is valid
function isValidEmail(email) {
    const filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(email).search (filter) != -1;
};

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
};

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
};

// Events
form.addEventListener("submit",function(event) {
    event.preventDefault();
    if( username.value === "" ){
        showError(username, "Username is invalid");
    } else {
        showSuccess(username);
    };

    if( email.value === "" ){
        showError(email, "Email is invalid");
    } else if (!isValidEmail(email.value)) {
        showError(email, "Email is not valid")
    } else {
        showSuccess(email);
    };

    if( password.value === "" ){
        showError(password, "Password is invalid");
    } else {
        showSuccess(password);
    };

    if( password2.value === "" ){
        showError(password2, "Password is invalid");
    } else {
        showSuccess(password2);
    };
})