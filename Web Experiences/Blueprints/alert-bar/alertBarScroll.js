insertHTMLBefore("body");

// Close banner
document.querySelector("#bx_TopBanner").style.display = "none";

const scrollPercentageInput = [[Scroll Percentage | enum(0,25,50,100)||{order: 1}]]
window.onscroll = function() {currentScrollPercentage()};
function currentScrollPercentage()
{
    const scrollPercentage = Math.round((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
    // console.log(scrollPercentage)
    if (scrollPercentage > scrollPercentageInput){
        document.querySelector("#bx_TopBanner").style.display = "block";
        document.body.classList.add("show-TopBanner");
    }
}

document.querySelector(".bx__btn-close").addEventListener("click", function(){
    document.querySelector("#bx_TopBanner").style.display = "none";
    document.body.classList.remove("show-TopBanner");
});

const bxButtonPress = document.getElementById('bx_TopBanner-button');
const bxCloseButtonPress = document.getElementById('bx_TopBanner-close');

function sendDataToBoxever(eventType) {
    var eventToSent = {
        "channel": "WEB",
        "type": eventType,
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID(),
        "interactionID":"OOB_EXP",
	    "interactionName": "ALERT_BAR_SCROLL"
    };
    Boxever.eventCreate(eventToSent, function (data) { }, 'json');
}
bxButtonPress.onclick = function() {
   sendDataToBoxever("INTERACTION_CLICKED")
   location.href = "[[Button Link]]";
};
bxCloseButtonPress.onclick = function() {
   sendDataToBoxever("INTERACTION_DISMISSED")
};
