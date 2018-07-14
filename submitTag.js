// Name Tag - User Info
function submitTag() {
        var gend = document.getElementsByName("gender");
        if(gend[0].checked) {
            gend.value = "Elder";
        }
        if(gend[1].checked) {
            gend.value = "Sister";
        }
        var firstName = document.getElementById('firstname');
        var lastName = document.getElementById('lastname');
        localStorage.setItem('gender', gend.value);
        localStorage.setItem('firstName', firstName.value);
        localStorage.setItem('lastName', lastName.value);
        
    // clearIt.onclick = function () {
    //     localStorage.clear();
    //     location.reload();
    // }

}

// function show(form) {
//     var tag = "<h2>" + form.gender.value + " " + form.firstname.value + " " + form.lastname.value + "</h2>";
//     document.getElementById('tagName').innerHTML = tag;
//     return false;
// }


// function getTagName() {
//     var getGender = localStorage.getItem("gender");
//     var getFirst = localStorage.getItem("firstName");
//     var getLast = localStorage.getItem("lastName");

//     var display ="<h2>" + getGender + " " + getFirst + " " + getLast + "</h2>";

//     document.getElementById("tagName").innerHTML = display;

//     return false;
// }

function getName() {
    var getGender = localStorage.getItem("gender");
    var getFirst = localStorage.getItem("firstName");
    var getLast = localStorage.getItem("lastName");

    var display = document.getElementById("tagName").innerHTML = "<h2>" + getGender + " " + getFirst + " " + getLast + "</h2>";


    return display;
}