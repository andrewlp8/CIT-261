

// load mission click spinning globe
function initMap() {
    function getName() {
        var getGender = localStorage.getItem("gender");
        var getFirst = localStorage.getItem("firstName");
        var getLast = localStorage.getItem("lastName");
    
        var display = document.getElementById("tagName").innerHTML = "<h2>" + getGender + " " + getFirst + " " + getLast + "</h2>";
    
    
        return display;
    }

    getName();

// Pull mission data from missions.json file here
// AJAX Example
var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://raw.githubusercontent.com/Petersen-Andrew/CIT-261/master/missions.json');
myRequest.onload = function () {
    var myData = JSON.parse(myRequest.responseText);

    var missionRandom = Math.floor(Math.random() * myData.missions.length);
    var j = missionRandom;

    // name of location & info
    var name = (myData.missions[j].name);
    
    var info = (myData.missions[j].info);

    // Latitude
    var x = (myData.missions[j].x);

    // Longitude
    var y = (myData.missions[j].y);

    // get location
    var location = { lat: x, lng: y };
    // The map, centered at location
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 10, center: location });

    // The marker, positioned at location
    var marker = new google.maps.Marker({ position: location, map: map });

    var getFirst = localStorage.getItem("firstName");

        document.getElementById("infoDiv").innerHTML = "Here is some more information about the <br>" + "<strong>" + name + '</strong>' + info + "<br><br/>";
        document.getElementById("missionTitle").innerHTML = "Congratulations " + getFirst + "!<br/> You have landed on the <br/> "+ name;


};

myRequest.send();

    

// https://www.latlong.net/
// http://lifey.org/lds-missions/



}