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
    $('.price-preview__item').on('click', function () {
        $('body').toggleClass('lock');
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
    var day = twoDigits(date.getDate())
    var month = twoDigits(date.getMonth() + 1)
    var year = twoDigits(date.getFullYear())
    var name_input = document.getElementById('input-date');
    name_input.value = day + "/" + month + "/" + year;

});