function invokeSubmit() {
    var score = 0;
    var resultElement = document.getElementById("result");
    // Check if each correct answer is selected
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var a4 = document.getElementById("a4");
    var a5 = document.getElementById("a5");
    if (a1 === null || a1 === void 0 ? void 0 : a1.checked)
        score++;
    if (a2 === null || a2 === void 0 ? void 0 : a2.checked)
        score++;
    if (a3 === null || a3 === void 0 ? void 0 : a3.checked)
        score++;
    if (a4 === null || a4 === void 0 ? void 0 : a4.checked)
        score++;
    if (a5 === null || a5 === void 0 ? void 0 : a5.checked)
        score++;
    if (resultElement) {
        resultElement.innerHTML = "<strong>Your Score: ".concat(score, " / 5</strong><br>\n            <button class=\"btn btn-primary\" onclick=\"goToSuggestionPage()\">Click to proceed</button>");
    }
}
function goToSuggestionPage() {
    window.location.href = "SuggestionPage.html";
}
