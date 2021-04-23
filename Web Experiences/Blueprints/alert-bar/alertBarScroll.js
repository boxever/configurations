//make experience unique
var compiledCSS = Boxever.templating.compile(variant.assets.css)(variant);
var styleTag = document.getElementById('style-' + variant.ref);
if (styleTag) {
    styleTag.innerHTML = compiledCSS;
}
////

insertHTMLBefore("body");

// declarations
const bxButton = document.querySelector("#bx-"+variant.ref+ ' #bx_TopBanner-button');
const bxCloseButton = document.querySelector("#bx-"+variant.ref+ ' .bx__btn-close');
const bxExperience = document.querySelector("#bx-"+variant.ref+ ' #bx_TopBanner');

// start with hidden banner (show on scroll)
bxExperience.style.display = "none";

//accept from template when to trigger the experience
const scrollPercentageInput = [[ Show at percentage page | enum(0,25,50,100)| 0 |{group: General}]];

//Listen on scroll, if scrolled enough start experience
window.onscroll = function() {currentScrollPercentage()};
const currentScrollPercentage= ()=>{
    const scrollPercentage = Math.round((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
    if (scrollPercentage > scrollPercentageInput){
        bxExperience.style.display = "block";
        document.body.classList.add("show-TopBanner");
    }
}

// declare BX function event
const sendDataToBoxever = (eventType) =>{
    var eventToSent = {
        "channel": "WEB",
        "type": eventType,
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID(),
        "interactionID":"OOB_EXP",
	    "interactionName": "ALERT_BAR_SCROLL"
    };
    Boxever.eventCreate(eventToSent, (data)=>{ }, 'json');
}

//Listen on X button
bxCloseButton.addEventListener("click", ()=>{
    bxExperience.style.display = "none";
    document.body.classList.remove("show-TopBanner");
    sendDataToBoxever("INTERACTION_DISMISSED")
});

// Listen on CTA button
bxButton.onclick = ()=> {
    sendDataToBoxever("INTERACTION_CLICKED")
    location.href = "[[Button Link]]";
 };
 



