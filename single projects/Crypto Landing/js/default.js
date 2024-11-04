// Menu Icon Toggle
$(document).ready(function () {
    $('#mobile-menu-toggle img').on({
        'click': function () {
            let src = ($(this).attr('src') === 'images/icon/menu-toggle.png') ?
                'images/icon/menu-close.png' :
                'images/icon/menu-toggle.png';
            $(this).attr('src', src);
        }
    });
});

// Menu Toggle
$("#mobile-menu-toggle").on('click', function () {
    $('.mobile-menu').toggleClass("active");
});

// Search Open & Close
$(".search-open").on('click', function () {
    $('.search-box').addClass("active");
});
$("#search-close").on('click', function () {
    $('.search-box').removeClass("active");
});

// Social List
$("#social-open").on('click', function () {
    $('#social-menu').toggleClass("active");
});

// Fundraising Slider Home Pg
$('.work-slider').owlCarousel({
    loop: true,
    margin: 20,
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
            items: 2,
            margin: 10,
            nav: false,
        },
        767: {
            items: 3,
        },
        991: {
            items: 4,
        }
    }
});