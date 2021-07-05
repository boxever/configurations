insertHTMLAfter("body");
const bxModal = document.getElementById("bx-modal_overlay");
bxModal.style.display = "flex";

const bxModalClose = bxModal.querySelector(".bx-modal__btn-close-icon");
const cancelButtons = bxModal.querySelectorAll("#bx-modal_overlay .cancelButton");
const firstNextButton = bxModal.querySelector("#bx-modal_overlay button[name='firstBoxButton']");
const secondNextButton = bxModal.querySelector("#bx-modal_overlay button[name='secondBoxButton']");
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

cancelButtons.forEach(function(cancelButton) {
    cancelButton.onclick = function() {
        bxModal.style.display = "none";
    }
});

firstNextButton.onclick = function() {
    console.log("first box")
    document.getElementById("firstBox").style.display = "none";
    document.getElementById("secondBox").style.display = "block";
};

secondNextButton.onclick = function() {
    console.log("second box")
    document.getElementById("secondBox").style.display = "none";
    document.getElementById("thirdBox").style.display = "block";
};
