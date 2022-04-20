$(function () {
    const da = new DynamicAdapt("max");
    da.init();


    var testimonials = new Swiper('.testimonials__swiper', {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 20,
        pagination: {
            el: ".testimonials__pagination",
            clickable: true,
        }
    });

    $(".price-preview__link").on('click', function (event) {
        event.preventDefault();
    });

    $('.price-preview__item').on('click', function () {
        $(this).toggleClass('active')
    });
    $('.price-preview__item').on('click', function () {
        $('.price-preview__item--shared').toggleClass('remove')
    });
    $('.price-preview__item, .header__burger').on('click', function () {
        $('body').toggleClass('lock');
    });

    $('.header__burger').on('click', function () {
        $('.menu, .header__burger-line').toggleClass('active')
    });


    const price_room = document.querySelector('.price-preview__item--room');
    const price_desk = document.querySelector('.price-preview__item--desk');
    const price_share = document.querySelector('.price-preview__item--shared');

    const bodyLock = document.querySelector('body');

    document.addEventListener('click', function (e) {
        if (e.target !== price_room && e.target !== price_desk && e.target == bodyLock) {
            price_room.classList.remove('active');
            price_desk.classList.remove('active');
            price_share.classList.remove('remove');
            bodyLock.classList.remove('lock');
        }
    });

    const burger = document.querySelector('.header__burger-line');
    const mobile = document.querySelector('.menu');

    document.addEventListener('click', function (e) {
        if (e.target !== burger && e.target !== mobile && e.target == bodyLock) {
            burger.classList.remove('active');
            mobile.classList.remove('active');
            bodyLock.classList.remove('lock');
        }
    });


    new AirDatepicker('.form-space__input--date', {
        locale: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Today',
            clear: 'Clear',
            firstDay: 0
        },
        timepicker: true,
        minHours: 7,
        maxHours: 20,
        minutesStep: 5,
    });

    function twoDigits(num) {
        if (num < 10) {
            return ('0' + num).slice(-2);
        } else {
            return num
        }
    }

    let date = new Date();
    var day = twoDigits(date.getDate());
    var month = twoDigits(date.getMonth() + 1);
    var year = twoDigits(date.getFullYear());
    var name_input = document.getElementById('input-date');
    name_input.value = day + "/" + month + "/" + year;

});