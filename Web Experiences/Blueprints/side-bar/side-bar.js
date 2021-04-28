//make experience unique
var compiledCSS = Boxever.templating.compile(variant.assets.css)(variant);
var styleTag = document.getElementById('style-' + variant.ref)
if (styleTag) {
    styleTag.innerHTML = compiledCSS;
}
//make experience unique END

insertHTMLAfter("body");

// show experience on bx load
let bxContent = document.querySelector("#bx-" + variant.ref + " #bx-sidebar");
setTimeout(function() {
    bxContent.classList.add("open");
    sendInteractionToBoxever("VIEWED");
});

// declarations
let bxSidebarCta = bxContent.querySelector("#bx-sidebar__primary-action");
let bxSidebarClose = bxContent.querySelector(".bx__btn-close__icon");

// Listeners
bxSidebarClose.onclick = function(){
    bxContent.classList.remove("open");
    sendInteractionToBoxever("DISMISSED");
}

bxSidebarCta.onclick = function(){
    sendInteractionToBoxever("CLICKED");
    window.location.href = "[[Button destination URL | string | # | {required:true, group: Button Configuration }]]";
}

const sendInteractionToBoxever = function(interactionType){
    let eventToSend = {
        "channel": "WEB",
        "type": "[[ Experience ID | String | SIDE_BAR | {required: true}]]_" + interactionType,
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID()
    };
    Boxever.eventCreate(eventToSend, function(data){ }, 'json');
}