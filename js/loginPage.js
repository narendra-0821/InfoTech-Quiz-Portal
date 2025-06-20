function invokeSubmit() {
    var usernameInput = document.getElementById("name");
    var passwordInput = document.getElementById("password");
    var nameErrorDiv = document.getElementById("nameError");
    var passErrorDiv = document.getElementById("passError");
    // Reset any previous errors
    if (nameErrorDiv)
        nameErrorDiv.innerText = "";
    if (passErrorDiv)
        passErrorDiv.innerText = "";
    var username = usernameInput === null || usernameInput === void 0 ? void 0 : usernameInput.value.trim();
    var password = passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.value.trim();
    var isValid = true;
    if (username !== "admin") {
        if (nameErrorDiv)
            nameErrorDiv.innerText = "Invalid Username";
        isValid = false;
    }
    if (password !== "asd@123") {
        if (passErrorDiv)
            passErrorDiv.innerText = "Invalid Password";
        isValid = false;
    }
    // Redirect if credentials are correct
    if (isValid) {
        window.location.href = "QuizPage.html";
    }
}
