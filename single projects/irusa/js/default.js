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

// Range Slider One
$(function () {
    $("#slider-range-one").slider({
        range: "min",
        value: 1223,
        min: 1,
        max: 2000,
        slide: function (event, ui) {
            $("#amount-one").val("$" + ui.value);
        }
    });
    $("#amount-one").val("$" + $("#slider-range-one").slider("value"));
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