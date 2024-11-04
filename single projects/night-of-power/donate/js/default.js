// Password Toggle
$(".toggle-password").click(function() {
    $(this).toggleClass("ps_eye ps_close_eye");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});

// Fundraising Slider Home Pg
$('.fundraising-slider1').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    dots:false,
    // Autoplay
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    // Smart Speed
    smartSpeed:2000,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,            
        },
        992:{
            items:3,
        }
    }
});

// Select
$(".select-v2").select2({
    minimumResultsForSearch: -1,
    theme: "cs-theme1",
});

// Appeals Details Page
$("#read-more-details1").click(function(){
    $("#mob-hide").toggle();
});
$("#read-more-details1").click(function () {
    $(this).text(function(i, v){
       return v === 'Read more' ? 'Read less' : 'Read more'
    })
});

$(document).ready(function(){
    // Select donate 1
    $("#show-donate").click(function(){
        $('.donate-shortcut').addClass('view');
        $(this).hide();
    });
    $("#hide-donate").click(function(){
        $('.donate-shortcut').removeClass('view');
        $('#show-donate').show();
    });
    // Select card
    $("#paypalValue").hide();
    $("input[name$='payment']").click(function() {
        $("#paypalValue").hide();
        $("#creditcardValue").hide();
        var value = $(this).val();
        $("#" + value).show();
    });
    // Read More
    $('#moreText').hide();
    $("#hide").click(function(){
        $('p#contentText').show();
        $("p#moreText").hide();
        $("a#show").show();
    });
    $("#show").click(function(){
        $('p#contentText').show();
        $("p#moreText").show();
        $("a#show").hide();
    });

    $('.input-phone').intlInputPhone(
        { preferred_country: ['gb'] }
    );
});

// Datepicker
$(document).ready(function() {
    $('#datePicker')
    .datepicker({
        format: 'mm/dd/yyyy'
    })
    .on('changeDate', function(e) {
        // Revalidate the date field
        $('#eventForm').formValidation('revalidateField', 'date');
    });
});