//Adds a unique variant identifier to CSS when deployed to ensure CSS does not impact styling of other elements.
var compiledCSS = Boxever.templating.compile(variant.assets.css)(variant);
var styleTag = document.getElementById('style-' + variant.ref);
if (styleTag) {
    styleTag.innerHTML = compiledCSS;
}
//End

insertHTMLAfter("body");

// show popup on bx load
let bxContent = document.querySelector("#bx-transition-card");
bxContent.style.display = "flex";

//declarations
const bxEmailCaptureContainer = document.getElementById("bx-email_capture_container")
const bxThankYouContainer = document.getElementById("bx-thank_you_container")
const bxClose = bxContent.querySelector(".bx__btn-close__icon");
const bxCTA = document.getElementById('bx-transition-card--primary');


// LIsteners
//on Email submission
bxCTA.onclick = function(){
    let bxEmail = document.getElementById("bx-email_input").value;
    let emailVerified = validateEmail(bxEmail);
    emailVerified ?
        onSuccessValidation(bxEmail)
    :
        //friendly error
        document.getElementById("bx-email_input").style.backgroundColor = 'rgba(200,0,0,0.1)';
};

bxClose.onclick = function(){
    bxContent.style.display = "none";
    sendInteractionToBoxever("DISMISSED")
}

//declare functions
const sendInteractionToBoxever = function(interactionType){
    let eventToSend = {
        "channel": "WEB",
        "type": "[[ Experience ID | String | SIDE_BAR | {required: true}]]_" + interactionType,
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID()
    };
    Boxever.eventCreate(eventToSend, (data)=> { }, 'json');
}

const onSuccessValidation = function(email){
    sendInteractionToBoxever("IDENTITY")
    let event = {
        "channel": "WEB",
        "type": "IDENTITY",
        "language": "EN",
        "currency": "EUR",
        "page": "Home",
        "pos": "spinair.com",
        "browser_id": Boxever.getID(),
        "email":email
    };
    Boxever.eventCreate(event, function(data){}, 'json');
    
    bxEmailCaptureContainer.style.display = "none";
    let X = document.querySelector(".bx__btn-close__icon");
    X.style.display = "none";
    bxThankYouContainer.style.display = "flex";
    // flash thank you message
    setTimeout(function(){ document.querySelector('#bx-transition-card').style.display= 'none'; }, 1500);
}

const validateEmail = function(bxEmail){
    let validation = false;
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(bxEmail);
    mailformat ? validation = true: validation = false;
    return validation;
}



