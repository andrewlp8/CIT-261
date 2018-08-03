



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
        document.getElementById("weatherTitle").innerHTML = '<h2 class="text-center" style="font-size: 50px; font-weight: 600;">The weather in the ' + name + ' currently is, ';

        
    $(function(){
                $.ajax({
    
                    url: "http://api.openweathermap.org/data/2.5/weather?lat=" + x + "&lon=" + y +  "&units=imperial" + "&APPID=44854c54343626da5e75e87135a175f6",
                    type: "GET",
                    dataType: "jsonp",
                    success: function(data){
                        var widget = showWeather(data);
    
                        $("#showWeather").html(widget);
    
                        $("#city").val('');
                    }
    
                });
            
           
        });


};

myRequest.send();

    

// https://www.latlong.net/
// http://lifey.org/lds-missions/




       
    


function showWeather(data){
    return "<h2 style='font-size: 40px; font-weight:bold;' class='text-center'>Current Weather for "+ data.name +", " +data.sys.country +"</h2>" +
        "<h3 style='padding-left:40px;'><strong>Weather</strong>: <img src='http://openweathermap.org/img/w/"+ data.weather[0].icon +".png'>" + data.weather[0].main + "</h3>" +
        "<h3 style='padding-left:40px;'><strong>Desription</strong>: " + data.weather[0].description + "</h3>" +
        "<h3 style='padding-left:40px;'><strong>Temperature</strong>: "+ data.main.temp +"&deg; F</h3>" + 
        "<h3 style='padding-left:40px;'><strong>Pressure</strong>: "+ data.main.pressure +" hPa</h3>" +
        "<h3 style='padding-left:40px;'><strong>Humidity</strong>: "+ data.main.humidity +"%</h3>" +
        "<h3 style='padding-left:40px;'><strong>Minimum Temperature</strong>: "+ data.main.temp_min +"&deg; F</h3>" +
        "<h3 style='padding-left:40px;'><strong>Maximum Temperature</strong>: "+ data.main.temp_max +"&deg; F</h3>" +
        "<h3 style='padding-left:40px;'><strong>Wind Speed</strong>: "+ data.wind.speed +"m/h</h3>" +
        "<h3 style='padding-left:40px;'><strong>Wind Direction</strong>: "+ data.wind.deg +"&deg;</h3>";
}
}