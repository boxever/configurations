insertHTMLAfter("body");
var bxContent = document.querySelector("#bx-"+variant.ref+ " #bx-transition-card");
setTimeout(function(){ bxContent.classList.add("open"); }, 10);


var bxCardClose = document.body.querySelector("#bx-"+variant.ref+ " #bx-modal__btn-close-icon");
bxCardClose.onclick = function() {
    bxContent.classList.remove("open");
}