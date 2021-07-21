insertHTMLAfter("body");
const bxModal = document.getElementById("bx-modal_overlay");
bxModal.style.display = "flex";

const bxModalClose = bxModal.querySelector(".bx-modal__btn-close-icon");
const submitButton = bxModal.querySelector("#bx-modal_overlay #submitBtn");

const modal = document.querySelector(".bx-modal_content");

modal.onclick = function (ev) {
    ev.stopPropagation();
}

bxModalClose.onclick = function() {
    bxModal.style.display = "none";
}

bxModal.onclick = function(){
    bxModal.style.display = "none";
}

submitButton.onclick = function() {
    var firstValue = document.querySelector("#range1").value;
    sendFeedbackToBoxever("FEEDBACK", firstValue);
    bxModal.style.display = "none";
}

function sendFeedbackToBoxever(eventype, firstValue) {
    var feedbackEvent = {
        "channel": "WEB",
        "type": eventype,
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID(),
        "question_1": firstValue
    };
    Boxever.eventCreate(feedbackEvent, function (data) { }, 'json');
}

