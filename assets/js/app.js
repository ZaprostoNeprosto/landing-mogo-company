document.addEventListener("DOMContentLoaded", function() {

    // Menu nav toggle
    const navToggle = document.querySelector("#nav_toggle");
    const nav = document.querySelector("#nav");

    navToggle.addEventListener("click", function(event) {
        event.preventDefault();
        navToggle.classList.toggle("active");
        nav.classList.toggle("active");
    });

    // Collapse
    const collapseLinks = document.querySelectorAll("[data-collapse]");

    collapseLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            link.classList.toggle("active");
        });
    });

    // Sliders
    const sliderService = document.querySelector("[data-slider-service]");

    new Swiper(sliderService, {
        slidesPerView: 1,
        spaceBetween: 115,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });

    const sliderWork = document.querySelector("[data-slider-work]");

    new Swiper(sliderWork, {
        slidesPerView: 1,
        spaceBetween: 115,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });
});
