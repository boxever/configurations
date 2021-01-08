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

    return getTriggerOrder();
})();