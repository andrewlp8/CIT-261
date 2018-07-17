
// about button
function aboutInfo() {
    var modal = document.getElementById('about');
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
       
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
}

// instructions button
function instructions() {   
    var modal = document.getElementById('instructions');
    var span = document.getElementsByClassName("close")[1];

    modal.style.display = "block";
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
       
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
           
        }
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

function playAgain() {
    var mapScreen = document.getElementById("missionMapScreen"); 
    var mMenuVH = document.getElementById("containerMainMenu"); 
    mapScreen.style.display = "none";
    mMenuVH.style.display = "block";
    event.preventDefault();
}

// sound
function clickSound() {
    var clickS = document.getElementById('clickSound');

    clickS.play();
}

// Music
function musicON_OFF() {

    var backMusic = document.getElementById("backMusic");
        if (backMusic.paused) {
            backMusic.play();
        }
        else {
            backMusic.pause();
        }

}
// for volume
function volumeHigh() {
    var vol = document.getElementById('backMusic');
    vol.volume = 1.0;
}

function volumeMedium() {
    var vol = document.getElementById('backMusic');
    vol.volume = 0.5;
}
function volumeLow() {
    var vol = document.getElementById('backMusic');
    vol.volume = 0.2;
}

function musicOpts() {
    var modal = document.getElementById('musicContainer');
    var span = document.getElementsByClassName("close")[2];

    modal.style.display = "block";
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
       
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
           
        }
    }
}