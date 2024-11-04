// Banner Slider
$('#banner_slider').owlCarousel({
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
    loop: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    smartSpeed: 2000,
    autoplayTimeout: 4000,
    autoplay: true,
    autoplayHoverPause: true,
    responsiveClass: false,
});

// 4 Grid Slider
$('.slider-four').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    // Autoplay
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    // Smart Speed
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 1,
        },
        524: {
            items: 2,
        },
        768: {
            items: 3,
        },
        992: {
            items: 4,
        }
    }
});

// Countdown
$(function () {
    var austDay = new Date();
    austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
    $('#defaultCountdown').countdown({
        until: austDay
    });
    $('#year').text(austDay.getFullYear());
});

// Calender
$(function () {
    $("#datepicker").datepicker({
        dayNamesMin: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        firstDay: 1,
        minDate: 0,
        showOtherMonths: true,
    });
});