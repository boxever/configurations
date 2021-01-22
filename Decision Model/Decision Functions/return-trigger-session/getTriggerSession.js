// This function will return the session that triggered the execution of the experience.
// This is for use in triggered experiences where the trigger is Session Closed or Abandoned Cart.

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

    var triggerSession =  getTriggerSession();
})();