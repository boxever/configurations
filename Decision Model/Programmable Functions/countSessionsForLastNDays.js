// This function will return the number of sessions in the last N days.

(function () {
    var numberOfDays = 7;

    function countSessionsForLastNDays(n){
        var numberOfSessions = 0;
        var cutOff = new Date();
        cutOff.setDate(cutOff.getDate() - n);

        for (var i = 0; i < guest.sessions.length; i++) {
            var currentSession = guest.sessions[i];
            if (Date.parse(currentSession.createdAt) < cutOff) {
                continue;
            }
            numberOfSessions++;
        }
        return numberOfSessions;
    }

    var numberOfSessions = countSessionsForLastNDays(numberOfDays); 
})();