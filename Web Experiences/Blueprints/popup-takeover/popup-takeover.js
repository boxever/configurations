insertHTMLBefore("body");
function sendDataToBoxever(eventType) {
    var eventToSent = {
        "channel": "WEB",
        "type": eventType,
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID(),
        "interactionID":"OOB_EXP",
	    "interactionName": "POP_UP_TAKEOVER"
    };
    Boxever.eventCreate(eventToSent, function (data) { }, 'json');
}
document.querySelector("#bx-modal_overlay").style.display = "flex";
document.body.classList.add("bx-modal_content");
var bxCardClose = document.querySelector(".bx-modal__btn-close-icon");
bxCardClose.onclick = function() {
    sendDataToBoxever("INTERACTION_DISMISSED");
    document.querySelector("#bx-modal_overlay").style.display = "none";
}
var bxCardClicked = document.querySelector(".bx-modal_button");
bxCardClicked.onclick = function() {
    sendDataToBoxever("INTERACTION_CLICKED");
    document.querySelector("#bx-modal_overlay").style.display = "none";
}
