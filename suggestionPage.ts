function addSuggestion(): void {
    const empInput = <HTMLInputElement>document.getElementById("empInput");
    const suggestionInput = <HTMLTextAreaElement>document.getElementById("suggestionInput");
    const outputArea = document.getElementById("outputArea");

    const empName = empInput?.value.trim();
    const suggestion = suggestionInput?.value.trim();

    if (empName && suggestion && outputArea) {
        outputArea.innerHTML = `
            <p><strong>Suggestion received from ${empName}:</strong></p>
            <p>${suggestion}</p>
        `;
    } else if (outputArea) {
        outputArea.innerHTML = `<p class="text-danger">Please enter both name/ID and suggestion.</p>`;
    }
}

function goHome(): void {
    window.location.href = "HomePage.html";
}
