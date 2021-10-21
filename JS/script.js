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

//! slick slider fire function
$('.slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});

