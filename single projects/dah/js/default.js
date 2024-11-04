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