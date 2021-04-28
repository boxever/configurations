// Adds a unique variant identifier to CSS when deployed to ensure CSS does not impact styling of other elements.
var compiledCSS = Boxever.templating.compile(variant.assets.css)(variant);
var styleTag = document.getElementById('style-' + variant.ref);
if (styleTag) {
    styleTag.innerHTML = compiledCSS;
}
// End

insertHTMLBefore("body");

// declarations
const bxButtonPress = document.getElementById('bx_TopBanner-button');
const bxCloseButtonPress = document.querySelector(".bx__btn-close__icon");
let isBannerBeenClosed = false;

// when sending email, verify ? sendDataToBoxever() or "stop event" ;
bxButtonPress.onclick = function(){
    isBannerBeenClosed = true;
    let emailVerified = validateEmail();
    if(emailVerified){
        hideBar();
        sendDataToBoxever("INTERACTION_CLICKED")
        showThankYou();
    }else{
        //friendly error
        document.getElementById("bx-email_input").style.backgroundColor = 'rgba(200,0,0,0.1)'
        isBannerBeenClosed = false;
    }
};

//dismiss bar;
bxCloseButtonPress.onclick = function(){
    isBannerBeenClosed = true;
    hideBar();
   sendDataToBoxever("INTERACTION_DISMISSED")
};

// functions
const currentScrollPercentage = function(){
    const scrollPercentage = Math.round((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);

    if (scrollPercentage > scrollPercentageInput && !isBannerBeenClosed){
        document.querySelector(`#bx-${variant.ref} #bx_TopBanner`).style.display = "flex";
        document.body.classList.add("show-TopBanner");
    }
}

const showThankYou= function(){
    let thanksMessage = document.querySelector('#bx-thank_you_modal');
    thanksMessage.style.display = "block";

    setTimeout(function(){ thanksMessage.style.display= 'none'; }, 1500);
}

// dismiss bar
const hideBar = function(){
    document.querySelector("#bx_TopBanner").style.display = "none";
    document.body.classList.remove("show-TopBanner");
}

const sendInteractionToBoxever = function(interactionType) {
    let eventToSend = {
        "channel": "WEB",
        "type": "[[ Experience ID | String | EMAIL_CAPTURE_BAR | {required: true}]]_" + interactionType,
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID()
    };
    Boxever.eventCreate(eventToSend, function(data) { }, 'json');
    
    sendInteractionToBoxever("CLICKED");
}

// validate text if Mail format
const validateEmail = function(){
    let bxEmail = document.getElementById("bx-email_input").value;
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(bxEmail)
    let validation = false;
    mailformat ? validation = true: validation = false;
    return validation;
}