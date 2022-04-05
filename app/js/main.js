$(function () {
    var testimonials = new Swiper('.testimonials__swiper', {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 20,
        pagination: {
            el: ".testimonials__pagination",
            clickable: true,
        },
    });

    $('.price-preview__item').on('click', function () {
        $(this).toggleClass('price-preview__item--active')
        $('.price-preview__item').on('click', function () {
            $('.price-preview__item').not(this).removeClass('price-preview__item--active')
        })
    });

});