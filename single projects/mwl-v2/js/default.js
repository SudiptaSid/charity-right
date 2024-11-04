// Brand Slider
$('#brand-one').owlCarousel({
    loop: true,
    nav: false,
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
        768: {
            items: 4,
        },
    }
});