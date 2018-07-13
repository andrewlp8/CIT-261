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
    var mMenuVH = document.getElementById("containerMainMenu"); 
    var nameTagS = document.getElementById("spinningGlobe"); 
    mMenuVH.style.display = "none";   
    nameTagS.style.display = "block";

    return false;
}

