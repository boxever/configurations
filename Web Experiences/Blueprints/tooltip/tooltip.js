// You can choose how you want to add your HTML by using insertHTMLBefore, insertHTMLAfter, or replaceHTML methods
// e.g insertHTMLAfter('#.someClassName'); or insertHTMLAfter('body'); or replaceHTML('#myPageId')

insertHTMLAfter("body");

var position = "[[Position | enum(top,bottom,right,left) | left]]"
var targetElement = document.querySelector("[[Target Element Selector | string | .body | {required:true}]]");
var bxTooltip = document.querySelector("#bx-"+variant.ref+ " #bx-tooltip-card");

setTimeout(function(){
    setTooltipPosition();
}, 10);


var bxCardClose = document.body.querySelector("#bx-"+variant.ref+ " #bx-modal__btn-close-icon");
bxCardClose.onclick = function() {
    console.log("CLOSE");
    bxTooltip.style.top = "-1000px";
}

function setTooltipPosition() {
    switch(position) {
        case "top":
            bxTooltip.style.top = (targetElement.getBoundingClientRect().top + document.documentElement.scrollTop - bxTooltip.offsetHeight - 15) + "px"
            bxTooltip.style.left = (targetElement.getBoundingClientRect().left + document.documentElement.scrollLeft + targetElement.offsetWidth / 2 - bxTooltip.offsetWidth / 2) + "px"
            bxTooltip.classList.add("top");
        break;
        case "bottom":
            bxTooltip.style.top = (targetElement.getBoundingClientRect().top + document.documentElement.scrollTop + targetElement.offsetHeight + 15) + "px"
            bxTooltip.style.left = (targetElement.getBoundingClientRect().left + document.documentElement.scrollLeft + targetElement.offsetWidth / 2 - bxTooltip.offsetWidth / 2) + "px"
            bxTooltip.classList.add("bottom");
        break;
        case "right":
            bxTooltip.style.top = (targetElement.getBoundingClientRect().top + document.documentElement.scrollTop + targetElement.offsetHeight / 2 - bxTooltip.offsetHeight / 2) + "px"
            bxTooltip.style.left = (targetElement.getBoundingClientRect().left + document.documentElement.scrollLeft + targetElement.offsetWidth + 15) + "px"
            bxTooltip.classList.add("right");
        break;
        default:
            bxTooltip.style.top = (targetElement.getBoundingClientRect().top + document.documentElement.scrollTop + targetElement.offsetHeight / 2 - bxTooltip.offsetHeight / 2) + "px"
            bxTooltip.style.left = (targetElement.getBoundingClientRect().left + document.documentElement.scrollLeft - bxTooltip.offsetWidth - 15) + "px"
            bxTooltip.classList.add("left");
    }
}