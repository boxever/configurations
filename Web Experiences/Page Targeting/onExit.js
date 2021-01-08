// Triggers the experience when user moves their mouse out of the browser window
(function () {
    function checkMouseLocation() {
        if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
            targetingPassed();
            document.removeEventListener("mouseleave", checkMouseLocation);
        }
    }
    document.addEventListener("mouseleave", checkMouseLocation);
})();
