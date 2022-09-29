
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',   
    loop: true,
    // simulateTouch: false,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

var slider2 = new Swiper(".slider2", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // dynamicBullets: true,

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})