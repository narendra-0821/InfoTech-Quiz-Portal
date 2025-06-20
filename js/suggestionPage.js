function addSuggestion() {
    var empInput = document.getElementById("empInput");
    var suggestionInput = document.getElementById("suggestionInput");
    var outputArea = document.getElementById("outputArea");
    var empName = empInput === null || empInput === void 0 ? void 0 : empInput.value.trim();
    var suggestion = suggestionInput === null || suggestionInput === void 0 ? void 0 : suggestionInput.value.trim();
    if (empName && suggestion && outputArea) {
        outputArea.innerHTML = "\n            <p><strong>Suggestion received from ".concat(empName, ":</strong></p>\n            <p>").concat(suggestion, "</p>\n        ");
    }
    else if (outputArea) {
        outputArea.innerHTML = "<p class=\"text-danger\">Please enter both name/ID and suggestion.</p>";
    }
}
function goHome() {
    window.location.href = "HomePage.html";
}
