// Fixed Menu
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".header-one").addClass("fixed_menu");
    } else {
        $(".header-one").removeClass("fixed_menu");
    }
});