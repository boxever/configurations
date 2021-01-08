insertHTMLBefore("body");

// Close banner
document.querySelector("#bx_TopBanner").style.display = "none";

const scrollPercentageInput = [[Scroll Percentage | enum(0,25,50,100)||{order: 1}]]
window.addEventListener('scroll', currentScrollPercentage);
function currentScrollPercentage()
{
    const scrollPercentage = Math.round((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
    if (scrollPercentage > scrollPercentageInput){
        showBar();
        window.removeEventListener('scroll', currentScrollPercentage);
    }
}

function showBar() {
    document.querySelector("#bx_TopBanner").style.display = "block";
    document.body.classList.add("show-TopBanner");
}

function dismissBar() {
    document.querySelector("#bx_TopBanner").style.display = "none";
    document.body.classList.remove("show-TopBanner");
}

function showThankYou() {
    document.querySelector("#bx-thank_you_modal").style.display = "flex";
}

function dismissThankYou() {
    document.querySelector("#bx-thank_you_modal").style.display = "none";
}

const bxButtonPress = document.getElementById('bx-modal_button');
const bxCloseButtonPress = document.getElementById('bx_TopBanner-close');
const bxThankYou = document.getElementById('bx-thank_you_modal');

function sendDataToBoxever(eventType) {
    var eventToSent = {
        "channel": "WEB",
        "type": eventType,
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID(),
        "interactionID":"OOB_EXP",
	    "interactionName": "EMAIL_BAR_SCROLL"
    };
    Boxever.eventCreate(eventToSent, function (data) { }, 'json');
}
function sendIdentityEvent() {
    var eventToSend = {
        "channel": "WEB",
        "type": "IDENTITY",
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID(),
        "email": document.getElementById("bx-email_input").value
    };
    Boxever.eventCreate(eventToSend, function (data) { }, 'json');
}

bxButtonPress.onclick = function() {
    if (document.getElementById("bx-email_input").value.length > 0) {
        sendIdentityEvent();
        sendDataToBoxever("INTERACTION_IDENTITY");
        showThankYou();
        dismissBar();
    }
};

bxCloseButtonPress.onclick = function() {
   sendDataToBoxever("INTERACTION_DISMISSED");
   dismissBar();
};

bxThankYou.onclick = function() {
    dismissThankYou();
};