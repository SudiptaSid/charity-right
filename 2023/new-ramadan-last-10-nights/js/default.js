// Mobile Escort Gallery
$(".m-escort-gallery").owlCarousel({
  margin: 10,
  items: 2,
  dots: false,
  nav: false,
  navText: [
    "<span class='fa fa-angle-left'></span>",
    "<span class='fa fa-angle-right'></span>",
  ],
  loop: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  smartSpeed: 2000,
  autoplayTimeout: 4000,
  autoplay: false,
  autoplayHoverPause: true,
  responsiveClass: false,
});