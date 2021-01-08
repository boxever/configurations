insertHTMLBefore("body");
var pageTitle = document.title;
var attentionMessage = "[[Title Text | text |Choose first flashing text| {order: 1,max: 20}]]";
var attentionMessage1 = "[[Second Text | text |Choose second flashing text| {order: 1,max: 20}]]"
var blinkEvent = null;
var eventSent = false;

var isPageActive = !document.hidden;
if(!isPageActive){
    blink();
}else {
    document.title = pageTitle;
    clearInterval(blinkEvent);
}
window.addEventListener('visibilitychange', visibilityChangeFunction);
function visibilityChangeFunction(){
    var isPageActive = !document.hidden;
    if(!isPageActive){
        blink();
    }else {
        document.title = pageTitle;
        clearInterval(blinkEvent);
    }
}

function blink(){
    blinkEvent = setInterval(function() {
        if(document.title === attentionMessage1){
            document.title = attentionMessage;
        }else {
            document.title = attentionMessage1;
        }
    }, 100);
}