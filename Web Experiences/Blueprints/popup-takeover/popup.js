insertHTMLBefore("body");
document.querySelector("#bx-modal_overlay").style.display = "flex";
document.body.classList.add("bx-modal_content");
var bxCardClose = document.querySelector(".bx-modal__btn-close-icon");
bxCardClose.onclick = function() {
    document.querySelector("#bx-modal_overlay").style.display = "none";
}