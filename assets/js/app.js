document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("#header");
    const intro = document.querySelector("#intro");
    let scrollOffset = window.scrollY;

    // Fixed Header
    checkScroll(scrollOffset);

    window.addEventListener("scroll", function() {
        scrollOffset = window.scrollY;
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= intro.clientHeight) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }

    // Smooth Scroll
    const scrollLinks = document.querySelectorAll("[data-scroll]");

    scrollLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const blockId = link.getAttribute("data-scroll");
            const targetElement = document.querySelector(blockId);
            const blockOffset = targetElement.getBoundingClientRect().top + window.scrollY;

            document.querySelectorAll("#nav a").forEach(function(navLink) {
                navLink.classList.remove("active");
            });

            link.classList.add("active");

            window.scrollTo({
                top: blockOffset,
                behavior: "smooth"
            });
        });
    });

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
