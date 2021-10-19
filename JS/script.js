//! NavBar Script
let navToggleBtn = document.querySelector(".navbar-toggler");
navToggleBtn.onclick = () => {
    let navToggleIcon = document.getElementById("navToggleIcon");
    if (navToggleIcon.classList.contains("fa-bars")) {
        navToggleIcon.classList.replace("fa-bars", "fa-times")
    } else {
        navToggleIcon.classList.replace("fa-times", "fa-bars")
    }
}
window.onscroll = () => {
    let scrollPosition = window.scrollY
    let nav = document.querySelector("nav")
    if (scrollPosition > 150) {
        nav.classList.add("navbar-sticky")
    } else {
        nav.classList.remove("navbar-sticky")
    }
}

//! Typed Js Script
var typed = new Typed('#typed', {
    strings: ["Frontend Developer.^1000", "Freelancer.^1000"],
    typeSpeed: 80,
    loop: true,
});
