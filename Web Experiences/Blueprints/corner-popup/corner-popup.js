insertHTMLAfter("body");
var bxContent = document.querySelector("#bx-"+variant.ref+ " #bx-transition-card");

setTimeout(function() {
    bxContent.classList.add("open");
    sendInteractionToBoxever("VIEWED");
});

var bxCardClose = document.body.querySelector("#bx-"+variant.ref+ " #bx-transition-card--secondary");
bxCardClose.onclick = function() {
    sendInteractionToBoxever("DISMISSED");
    bxContent.classList.remove("open");
}

var bxCardCta = bxContent.querySelector("#bx-transition-card--primary");
bxCardCta.onclick = function() {
    sendInteractionToBoxever("CLICKED");
    window.location.href = "[[CTA destination URL | string || {required:true}]]";
}

function sendInteractionToBoxever(interactionType) {
    var eventToSent = {
        "channel": "WEB",
        "type": "INTERACTION",
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID(),
        "interactionID":"BX_CORNER_POPUP",
        "interactionType": interactionType
    };
    Boxever.eventCreate(eventToSent, function (data) { }, 'json');
}