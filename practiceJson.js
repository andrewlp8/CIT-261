

// load mission click spinning globe
function initMap() {
             getName();
// declare min to max for rand num generator
var min = 0;
var max = 5;



var missionRandom = Math.floor(Math.random() * (max - min + 1) + min);
var j = missionRandom;

// Pull mission data from missions.json file here
// AJAX Example
var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://raw.githubusercontent.com/Petersen-Andrew/CIT-261/master/missions.json');
myRequest.onload = function () {
    var myData = JSON.parse(myRequest.responseText);
    

    // name of location & info
    var name = (myData.missions[j].name);
    
    var info = (myData.missions[j].info);

    // Latitude
    var x = (myData.missions[j].x);

    // Longitude
    var y = (myData.missions[j].y);

    // for (var i = 0; i < myData.missions[1].key.length; i++) {
    //     forDisplay += myData.vehicles[1].models[i] + "<br/>";
        
    // }
        

    document.getElementById('testOut').innerHTML = j + "<h4>" + name + "</h4>" + info + x + "<br/>" + y;
    


};

myRequest.send();



    document.getElementById("infoDiv").innerHTML = "You are going to the <br>" + "<strong>" + name + '</strong>' + info + "<br><br/>";
    document.getElementById("missionTitle").innerHTML = name;

// https://www.latlong.net/
// http://lifey.org/lds-missions/


// get location
var location = { lat: x, lng: y };
// The map, centered at location
var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 10, center: location });
// The marker, positioned at location
var marker = new google.maps.Marker({ position: location, map: map });
}