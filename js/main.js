window.onscroll = function() {nav_stick()};
var navbar = document.getElementById("navbar");
var pos = navbar.offsetTop;

function nav_stick() {
    if (window.pageYOffset > pos) {
        navbar.classList.remove("container");
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
        navbar.classList.add("container");
    }
}