// Triggers the experience when the user has scrolled a certain percentage of the page

const scrollPercentageInput = 25; // Edit here to change the scroll percentage

function checkScrollPercentage() {
    const scrollPercentage = Math.round((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
    if (scrollPercentage > scrollPercentageInput) {
        window.removeEventListener("scroll", checkScrollPercentage);
        targetingPassed();
    }
}

window.addEventListener("scroll", checkScrollPercentage);