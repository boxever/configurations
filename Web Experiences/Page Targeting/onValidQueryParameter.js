// Triggers the experience when only when a query parameter with a specific value is present
(function () {
    const targetQueryParameter = 'bx-qa'; // edit here to change the targeted query parameter
    const targetValue = '1'; // edit here to change the value required for the targeted query parameter

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(targetQueryParameter) === targetValue;
})();