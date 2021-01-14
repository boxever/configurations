// Triggers the experience when user clicks the specified HTML element
(function () {
    const targetElementPath = "body"; // Edit here to change to target element
    let targetElement;

    function waitForElement() {
        targetElement = document.querySelector(targetElementPath);
        if (targetElement) {
            console.log(targetElement);
            targetElement.addEventListener("click", triggerExperience);
        }
        else {
            setTimeout(waitForElement, 100);
        }
    }

    function triggerExperience() {
        targetingPassed();
        targetElement.removeEventListener("click", triggerExperience);
    }

    waitForElement();
})();