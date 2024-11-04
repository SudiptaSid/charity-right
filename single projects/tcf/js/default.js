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