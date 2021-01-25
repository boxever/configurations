insertHTMLAfter("body");
var bxContent = document.querySelector("#bx-"+variant.ref+ " #bx-transition-card");
bxContent.style.display = "flex";
setTimeout(function(){
    bxContent.classList.add("open");
}, 10);


const bxEmailCaptureContainer = document.getElementById("bx-email_capture_container")
const bxThankYouContainer = document.getElementById("bx-thank_you_container")
const bxClose = bxContent.querySelector(".bx__btn-close-icon");

const bxButtonPress = document.getElementById('bx-transition-card--primary');
function sendDataToBoxever(eventType) {
    var eventToSend = {
        "channel": "WEB",
        "type": eventType,
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID(),
        "interactionID":"OOB_EXP",
	    "interactionName": "CORNER_POPUP_EMAIL"
    };
    Boxever.eventCreate(eventToSend, function(data) {}, 'json');
}

bxButtonPress.onclick = function() {
    sendDataToBoxever("INTERACTION_IDENTITY")
    var event = {
        "channel": "WEB",
        "type": "IDENTITY",
        "language": "EN",
        "currency": "EUR",
        "page": "Home",
        "pos": "spinair.com",
        "browser_id": Boxever.getID(),
        "email": document.getElementById("bx-email_input").value
    };
    Boxever.eventCreate(event, function(data) {}, 'json');
    
    bxEmailCaptureContainer.style.display = "none";
    bxThankYouContainer.style.display = "flex";
};


bxClose.onclick = function() {
    bxContent.style.display = "none";
}