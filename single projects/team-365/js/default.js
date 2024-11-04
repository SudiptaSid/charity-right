// Menu Fixed 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $("#team-365-header").addClass("fixed-header");
    } else {
        $("#team-365-header").removeClass("fixed-header");
    }
});

// On scroll change logo image
window.onscroll = function () { 
    scrollFunction(); 
}; 

function scrollFunction() { 
    var image = document.getElementById("logo-img"); 
    if (document.documentElement.scrollTop > 70) 
        image.src =  "./images/logo-c.svg"; 
    else 
        image.src =  "./images/logo-w.svg"; 
};

// Video Player
$('#play').on('click', function (e) {
    e.preventDefault();
    $("#player")[0].src += "?autoplay=1";
    $('#player').show();
    $('#video-cover').hide();
    $('#play').hide();
});

// Fundraising Slider Home Pg
$(document).ready(function(){
    var owl = $('.fundraising-slider1');
    owl.owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
        dots:false,
        stagePadding: 75,
        // Autoplay
        autoplay:false,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        // Smart Speed
        smartSpeed:2000,
        responsive:{
            0:{
                items:1,
                stagePadding:0,
            },
            1080:{
                items:2,            
            },
            1500:{
                items:3,
            }
        },
    });
    
    // Custom Button
    $('.cs-nav-next').click(function() {
      owl.trigger('next.owl.carousel');
    });
    $('.cs-nav-prev').click(function() {
      owl.trigger('prev.owl.carousel');
    });
    
  });