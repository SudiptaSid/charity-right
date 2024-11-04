// Menu Fixed 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 82) {
        $("#ff-header").addClass("fixed-header");
    } else {
        $("#ff-header").removeClass("fixed-header");
    }
});

// On scroll change logo image
window.onscroll = function () { 
    scrollFunction(); 
}; 

function scrollFunction() { 
    var image = document.getElementById("logo-img"); 
    if (document.documentElement.scrollTop > 70) 
        image.src =  "./images/logo-c.png"; 
    else 
        image.src =  "./images/logo-w.png"; 
};

// Radio Checked Add Class
$(document).ready(function () {
    $('input').click(function () {
        $('input:not(:checked)').parent().removeClass("big");
        $('input:checked').parent().addClass("big");
    });
    $('input:checked').parent().addClass("big");

    $('.input-phone').intlInputPhone();
});

// How It Work SLider
$(document).ready(function(){
    var owl = $('.fundraising-slider1');
    owl.owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
        dots:false,
        stagePadding: 130,
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
                stagePadding: 15,
                margin:10,
            },
            768:{
                items:1,            
            },
            1080:{
                items:2,
            }
        },
    });
});

// Partner Slider
$(document).ready(function(){
    var owl = $('.partner-slider');
    owl.owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
        dots:false,
        // Autoplay
        autoplay:false,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        // Smart Speed
        smartSpeed:2000,
        responsive:{
            0:{
                items:1,
                margin:10,
                stagePadding: 20,
            },
            768:{
                items:2,
                stagePadding: 0,
            },
            991:{
                items:3,
            }
        },
    });    
});

// Video Player
$('#play').on('click', function (e) {
    e.preventDefault();
    $("#player")[0].src += "?autoplay=1";
    $('#player').show();
    $('#video-cover').hide();
    $('#play').hide();
});