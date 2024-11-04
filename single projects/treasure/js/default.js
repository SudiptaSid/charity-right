// Menu Smooth Scroll
// Select all links with hashes
$('.scroll')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});

// How It Work SLider
$(document).ready(function(){
    var owl = $('.sponsors-slider');
    owl.owlCarousel({
        loop:true,
        margin:0,
        nav:true,
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
                items:2,
            },
            550:{
                items:3,            
            },
            992:{
                items:4,
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