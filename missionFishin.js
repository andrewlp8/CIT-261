// Main Menu View Script
// about button
function aboutInfo() {   
    var x = document.getElementById("about");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
// instructions button
function instructions() {   
    var x = document.getElementById("instructions");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}   
// play button
function play() {
    var globeSpin1 = document.getElementById("spinningGlobe");   
    globeSpin1.style.visibility = "visible";
    var mMenuV1 = document.getElementById("containerMainMenu"); 
    mMenuV1.style.visibility = "hidden";
    
    
}

// Globe Spinning View






