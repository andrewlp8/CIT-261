
window.onload = load;
function load() {
    setTimeout(function () {
        var load_screen = document.getElementById("load_screen");
        document.body.removeChild(load_screen);
    }, 2000);

    return false;
}