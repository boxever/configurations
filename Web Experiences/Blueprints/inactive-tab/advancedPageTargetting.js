window.addEventListener('visibilitychange', visibilityChangeFunction);
function visibilityChangeFunction(){
    var isPageActive = !document.hidden;
    if(!isPageActive){
        window.removeEventListener('visibilitychange', visibilityChangeFunction);
        targetingPassed();
    }
}
