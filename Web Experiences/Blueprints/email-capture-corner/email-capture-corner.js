insertHTMLAfter("body");
var bxContent = document.querySelector("#bx-transition-card");
bxContent.style.display = "flex";
setTimeout(function(){
    bxContent.classList.add("open");
}, 10);


const bxEmailCaptureContainer = document.getElementById("bx-email_capture_container")
const bxThankYouContainer = document.getElementById("bx-thank_you_container")
const bxClose = bxContent.querySelector(".bx__btn-close__icon");

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
    let bxEmail = document.getElementById("bx-email_input").value;

    //declare function 
    const onSuccessValidation = (email)=>{
        sendDataToBoxever("INTERACTION_IDENTITY")
        var event = {
            "channel": "WEB",
            "type": "IDENTITY",
            "language": "EN",
            "currency": "EUR",
            "page": "Home",
            "pos": "spinair.com",
            "browser_id": Boxever.getID(),
            "email":email
        };
        Boxever.eventCreate(event, function(data) {}, 'json');
        
        bxEmailCaptureContainer.style.display = "none";
        bxThankYouContainer.style.display = "flex";
        setTimeout(function(){ document.querySelector('#bx-transition-card').style.display= 'none'; }, 1500);
    }

    // validate text if Mail format
    const ValidateEmail = (bxEmail) =>{
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(bxEmail)
        if(mailformat){
            onSuccessValidation(bxEmail)
            return true;
        }else{
            //friendly error
            document.getElementById("bx-email_input").style.backgroundColor = 'rgba(200,0,0,0.1)'
            return false;
        }
    }
    ValidateEmail(bxEmail);
        
};

bxClose.onclick = function() {
    bxContent.style.display = "none";
}