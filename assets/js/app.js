document.addEventListener("DOMContentLoaded", function() {

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
