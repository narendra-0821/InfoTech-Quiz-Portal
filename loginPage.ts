function invokeSubmit(): void {
    const usernameInput = <HTMLInputElement>document.getElementById("name");
    const passwordInput = <HTMLInputElement>document.getElementById("password");
    const nameErrorDiv = document.getElementById("nameError");
    const passErrorDiv = document.getElementById("passError");

    // Reset any previous errors
    if (nameErrorDiv) nameErrorDiv.innerText = "";
    if (passErrorDiv) passErrorDiv.innerText = "";

    const username = usernameInput?.value.trim();
    const password = passwordInput?.value.trim();

    let isValid = true;

    if (username !== "admin") {
        if (nameErrorDiv) nameErrorDiv.innerText = "Invalid Username";
        isValid = false;
    }

    if (password !== "asd@123") {
        if (passErrorDiv) passErrorDiv.innerText = "Invalid Password";
        isValid = false;
    }

    // Redirect if credentials are correct
    if (isValid) {
        window.location.href = "QuizPage.html";
    }
}
