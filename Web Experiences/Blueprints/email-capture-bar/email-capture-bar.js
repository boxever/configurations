//make experience unique
var compiledCSS = Boxever.templating.compile(variant.assets.css)(variant);
var styleTag = document.getElementById('style-' + variant.ref);
if (styleTag) {
    styleTag.innerHTML = compiledCSS;
}
////

insertHTMLBefore("body");

// start with hidden banner (show on scroll)
let banner = document.querySelector("#bx_TopBanner");
banner.style.display = "none";

// declarations
const bxButtonPress = document.getElementById('bx_TopBanner-button');
const bxCloseButtonPress = document.querySelector(".bx__btn-close__icon");
let isBannerBeenClosed = false;

//trigger experience
const scrollPercentageInput = [[ Show at percentage page | enum(0,25,50,100)| 0 |{group: 0 General}]];


// Listeners
// when scrolling the experience will trigger
window.onscroll = ()=>{ currentScrollPercentage()}

// when sending email, verify ? sendDataToBoxever() or "stop event" ;
bxButtonPress.onclick = ()=>{
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
bxCloseButtonPress.onclick = () =>{
    isBannerBeenClosed = true;
    hideBar();
   sendDataToBoxever("INTERACTION_DISMISSED")
};

// functions
const currentScrollPercentage = ()=> {
    const scrollPercentage = Math.round((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);

    if (scrollPercentage > scrollPercentageInput && !isBannerBeenClosed){
        document.querySelector(`#bx-${variant.ref} #bx_TopBanner`).style.display = "flex";
        document.body.classList.add("show-TopBanner");
    }
}

const showThankYou= ()=>{
    let thanksMessage = document.querySelector('#bx-thank_you_modal');
    thanksMessage.style.display = "block";

    setTimeout(()=>{ thanksMessage.style.display= 'none'; }, 1500);
}

// dismiss bar
const hideBar = ()=>{
    document.querySelector("#bx_TopBanner").style.display = "none";
    document.body.classList.remove("show-TopBanner");
}

const sendDataToBoxever = (eventType)=>{
    let eventToSent = {
        "channel": "WEB",
        "type": eventType,
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID(),
        "interactionID":"OOB_EXP",
	    "interactionName": "EMAIL_CAPTURE_BAR"
    };
    Boxever.eventCreate(eventToSent, (data)=>{ }, 'json');
}

// validate text if Mail format
const validateEmail = () =>{
    let bxEmail = document.getElementById("bx-email_input").value;
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(bxEmail)
    let validation = false;
    mailformat ? validation = true: validation = false;
    return validation;
}