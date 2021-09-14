// This function will return the value of the specified field from the specified Guest Data Extension.

(function () {
    function getValueFromDataExtension(dexName, dexFieldName) {
        for (var i = 0; i < guest.dataExtensions.length; i++) {
            var dex = guest.dataExtensions[i];
            if (dex.name === dexName) {
                return dex.values[dexFieldName];
            }
        }
    }

    var dataExtensionValue =  getValueFromDataExtension("dataExtensionName", "dataExtensionField");
})();