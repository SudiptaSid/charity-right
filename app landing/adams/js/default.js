// Fixed Menu
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".header-one").addClass("fixed_menu");
    } else {
        $(".header-one").removeClass("fixed_menu");
    }
});

// Menu Icon Toggle
$(document).ready(function () {
    $('#mobile-menu-toggle img').on({
        'click': function () {
            let src = ($(this).attr('src') === 'images/menu-toggle.png') ?
                'images/menu-close.png' :
                'images/menu-toggle.png';
            $(this).attr('src', src);
        }
    });
});

// Menu Toggle
$("#mobile-menu-toggle").on('click', function () {
    $('.mobile-menu').toggleClass("active");
});

// Smooth Scroll
$('.scroll')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });