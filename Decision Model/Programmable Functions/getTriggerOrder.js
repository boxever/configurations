// This function will return the order that triggered the execution of the experience.
// This is for use in triggered experiences where the trigger is Order Created or Order Updated.

(function () {
    function getTriggerOrder(){
        var orderRef;
        if (entity && entity.ref !== 'undefined') {
            orderRef = entity.ref;
        }
        var triggerOrder;
        for (var i = 0; i < guest.orders.length; i++) {
            var order = guest.orders[i];
            if (order.ref === orderRef) {
                triggerOrder = order;
                break;
            }
        }
        return triggerOrder;
    }

    var triggerOrder =  getTriggerOrder();
})();