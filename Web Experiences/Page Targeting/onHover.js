// Triggers the experience when user moves their mouse over the specified HTML element
(function () {
    const targetElementPath = "body"; // Edit here to change to target element
    let targetElement;

    function waitForElement() {
        targetElement = document.querySelector(targetElementPath);
        if (targetElement) {
            console.log(targetElement);
            targetElement.addEventListener("mouseover", triggerExperience);
        }
        else {
            setTimeout(waitForElement, 100);
        }
    }

    function triggerExperience() {
        targetingPassed();
        targetElement.removeEventListener("mouseover", triggerExperience);
    }

    waitForElement();
})();