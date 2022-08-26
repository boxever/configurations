// Adds a unique variant identifier to CSS when deployed to ensure CSS does not impact styling of other elements.
var compiledCSS = Boxever.templating.compile(variant.assets.css)(variant);
var styleTag = document.getElementById('style-' + variant.ref)
if (styleTag) {
    styleTag.innerHTML = compiledCSS;
}
// End Adds a unique variant identifier to CSS when deployed to ensure CSS does not impact styling of other elements.

insertHTMLAfter("body");

// SC function declaration
const sendInteractionToSitecoreCDP = function(interactionType) {
    let eventToSent = {
        "channel": "WEB",
        "type": "[[ Experience ID | String | CORNER | {required: true}]]_" + interactionType,
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID(),
    };
    Boxever.eventCreate(eventToSent, function (data) { }, 'json');
}

// show experience on load
let scContent = document.querySelector("#bx-"+variant.ref+ " #sc-transition-card");
setTimeout(function() {
    scContent.classList.add("open");
    sendInteractionToSitecoreCDP("VIEWED");
});

// declarations
var scCardClose = document.body.querySelector("#bx-"+variant.ref+ " #CTA-dismiss");
var scCloseBtn = document.body.querySelector("#bx-"+variant.ref+ " .sc-btn-close");
var CTAbtn = scContent.querySelector("#CTA-accept");

// close experience function declaration
const dismissExperience = function(){
    sendInteractionToSitecoreCDP("DISMISSED");
    scContent.classList.remove("open");
}


// Listeners
// dismiss experience on secondary button click
scCardClose.onclick = function() {
    dismissExperience();
}
// dismiss on X btn click
scCloseBtn.onclick = function() {
    dismissExperience();
}

// on Call to action click redirect to specific URL
CTAbtn.onclick = function() {
    sendInteractionToSitecoreCDP("CLICKED");
    window.location.href = "[[CTA destination URL | string || {required:true, group: Button Configuration}]]";
}

