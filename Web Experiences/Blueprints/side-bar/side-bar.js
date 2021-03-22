insertHTMLAfter("body");

var bxContent = document.getElementById("bx-sidebar");
setTimeout(function() {
    bxContent.classList.add("open");
    sendInteractionToBoxever("VIEWED");
});

var bxSidebarClose = bxContent.querySelector(".bx__btn-close__icon");
bxSidebarClose.onclick = function() {
    bxContent.classList.remove("open");
    sendInteractionToBoxever("DISMISSED");
}

var bxSidebarCta = bxContent.querySelector("#bx-sidebar__primary-action");
bxSidebarCta.onclick = function() {
    sendInteractionToBoxever("CLICKED");
    window.location.href = "[[Button destination URL | string | # | {required:true, group: 2 Button Configuration }]]";
}

function sendInteractionToBoxever(interactionType) {
    var eventToSent = {
        "channel": "WEB",
        "type": "INTERACTION",
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID(),
        "interactionID":"BX_SIDEBAR",
        "interactionType": interactionType
    };
    Boxever.eventCreate(eventToSent, function (data) { }, 'json');
}