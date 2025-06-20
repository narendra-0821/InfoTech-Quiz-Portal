function invokeSubmit(): void {
    let score = 0;

    const resultElement = document.getElementById("result");

    // Check if each correct answer is selected
    const a1 = <HTMLInputElement>document.getElementById("a1");
    const a2 = <HTMLInputElement>document.getElementById("a2");
    const a3 = <HTMLInputElement>document.getElementById("a3");
    const a4 = <HTMLInputElement>document.getElementById("a4");
    const a5 = <HTMLInputElement>document.getElementById("a5");

    if (a1?.checked) score++;
    if (a2?.checked) score++;
    if (a3?.checked) score++;
    if (a4?.checked) score++;
    if (a5?.checked) score++;

    if (resultElement) {
        resultElement.innerHTML = `<strong>Your Score: ${score} / 5</strong><br>
            <button class="btn btn-primary" onclick="goToSuggestionPage()">Click to proceed</button>`;
    }
}

function goToSuggestionPage(): void {
    window.location.href = "SuggestionPage.html";
}
