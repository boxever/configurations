// This function will return the number of events of the specified type in the provided session.

(function () {
    function getNumberOfEvents(session, eventType){
        var numberOfEvents = 0;
        for (var i = 0; i < session.events.length; i++) {
            var event = session.events[i];
            if (event.type === eventType) {
                numberOfEvents++;
            }
        }
        return numberOfEvents;
    }

    var numberOfEvents =  getNumberOfEvents(triggerSession, "VIEW"); // triggerSession can be obtained using the getTriggerSession function
})();