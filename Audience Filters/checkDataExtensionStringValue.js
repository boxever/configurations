(function () {
    for (var i = 0; i < guest.dataExtensions.length; i++) {
        if (guest.dataExtensions[i].name === "[[ Data Extension Name | string]]"
        && guest.dataExtensions[i].values
        && guest.dataExtensions[i].values.[[Custom Field Name | string]]) {
            return guest.dataExtensions[i].values.[[Custom Field Name]] [[Operator | enum(===,!==)]] "[[ Value | string ]]";
        }
    }
    return false;
})();