(function () {
    function getTriggerSession(){
        var sessionRef;
        if (entity && entity.ref !== 'undefined') {
            sessionRef = entity.ref;
        }
        var triggerSession;
        for (var i = 0; i < guest.sessions.length; i++) {
            var session = guest.sessions[i];
            if (session.ref === sessionRef) {
                triggerSession = session;
                break;
            }
        }
        return triggerSession;
    }

    return getTriggerSession();
})();