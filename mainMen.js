
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
    var nameTagS = document.getElementById("nameTagScreen"); 
    mMenuVH.style.display = "none";   
    nameTagS.style.display = "block";

}

// to tag
function toGlobe() {
    var ts = document.getElementById("nameTagScreen"); 
    var globe = document.getElementById("spinningGlobe"); 
    var mMenuVH = document.getElementById("containerMainMenu"); 
    mMenuVH.style.display = "none";   
    ts.style.display = "none";
    globe.style.display = "block";
    event.preventDefault();
}

// to mission map
function toMap() {
    var globe = document.getElementById("spinningGlobe"); 
    var mMenuVH = document.getElementById("missionMapScreen"); 
    globe.style.display = "none";
    mMenuVH.style.display = "block";
    event.preventDefault();
}

