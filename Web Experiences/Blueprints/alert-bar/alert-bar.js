// Adds a unique variant identifier to CSS when deployed to ensure CSS does not impact styling of other elements.
var compiledCSS = Boxever.templating.compile(variant.assets.css)(variant);
var styleTag = document.getElementById('style-' + variant.ref);
if (styleTag) {
    styleTag.innerHTML = compiledCSS;
}
// End Adds a unique variant identifier to CSS when deployed to ensure CSS does not impact styling of other elements.

// make space in the body for the experience
document.body.classList.add("show-TopBanner");
insertHTMLBefore("body");


// Declarations
const bxButton = document.querySelector("#bx-"+variant.ref+ ' #bx_TopBanner-button');
const bxCloseButton = document.querySelector("#bx-"+variant.ref+ ' .bx__btn-close');
const bxExperience = document.querySelector("#bx-"+variant.ref+ ' #bx_TopBanner');

// Declare BX function event
const sendInteractionToBoxever = function(interactionType){
    let eventToSend = {
        "channel": "WEB",
        "type": "[[ Experience ID | String | ALERT_BAR | {required: true}]]_" + interactionType,
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID()
    };
    Boxever.eventCreate(eventToSend, function(data){ }, 'json');
}

//Listen on X button
bxCloseButton.addEventListener("click", function(){
    bxExperience.style.display = "none";
    document.body.classList.remove("show-TopBanner");
    sendInteractionToBoxever("DISMISSED")
});

// Listen on CTA button
bxButton.onclick = function(){
    sendInteractionToBoxever("CLICKED")
    location.href = "[[Button Link]]";
};
 



