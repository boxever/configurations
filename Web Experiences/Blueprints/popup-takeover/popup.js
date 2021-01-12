insertHTMLAfter("body");
const bxModal = document.getElementById("bx-modal_overlay");
bxModal.style.display = "flex";
const bxModalClose = bxModal.querySelector(".bx-modal__btn-close-icon");
bxModalClose.onclick = function() {
    bxModal.style.display = "none";
}
