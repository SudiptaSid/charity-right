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

// Social List
$("#social-open").on('click', function () {
    $('#social-menu').toggleClass("active");
});

// Menu Toggle
$("#mobile-menu-toggle").on('click', function () {
    $('#mobile-menu').toggleClass("active");
});

// Password Toggle
$(".toggle-password").click(function () {
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
            items: 1,
        },
        600: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
});

// Blog Slider home Pg
//---- 1
$(function () {
    var len = $(".carousel").children().length;
    var acarousel = $(".carousel").acarousel({
        moveStep: function (elem, index, pos_index, t) {
            if (pos_index >= 3 && pos_index < len - 3 || pos_index == len - 3 && t == 0) {
                elem.hide();
            }
        }
    });
    changeActive();
    $(".carousel li a").click(function () {
        var move = acarousel.moveByElem($(this).parent());
        changeActive(move);
        return false;
    });
    $(".move_back").click(function () {
        var move = acarousel.move(1);
        changeActive(move);
        return false;
    });
    $(".move_next").click(function () {
        var move = acarousel.move(-1);
        changeActive(move);
        return false;
    });
    $(".move").click(function () {
        var pos = acarousel.getPos();
        pos = pos.index % 5 + pos.point;
        pos = parseInt($(".move").index(this)) - pos;
        var diff1 = Math.abs(pos) % 5 * (pos < 0 ? 1 : -1);
        var diff2 = (10 - (Math.abs(pos) + 5)) % 5 * (pos < 0 ? -1 : 1);
        move = acarousel.move(Math.abs(diff1) < Math.abs(diff2) ? diff1 : diff2);
        changeActive(move);
        return false;
    });

    function changeActive(move) {
        var index = acarousel.getPos(move).index % 5;
        $(".move").removeClass("active").eq(index).addClass("active");
    }
    $(window).resize(function () {
        var parent = $(".carousel_container");
        var self = $(".carousel");
        self.css({
            left: parent.width() / 2 - self.width() / 2,
            top: parent.height() / 2 - self.height() / 2
        });
    }).trigger("resize");
});

// Fundraising Pg Slider 
//----- 1
$('.fundraising-pg1').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
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
        0: {},
        600: {},
        992: {}
    }
});

//----- 2
$('.fundraising-pg2').owlCarousel({
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
            items: 1,
        },
        600: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
});

// Select
$(".single1").select2({
    minimumResultsForSearch: -1,
    theme: "filter1",
});

// Appeals Details Page
$("#read-more-details1").click(function () {
    $("#mob-hide").toggle();
});
$("#read-more-details1").click(function () {
    $(this).text(function (i, v) {
        return v === 'Read more' ? 'Read less' : 'Read more'
    })
});


// Select 2 tapas da
$("#single").select2({
    minimumResultsForSearch: -1
});
$("#single-1").select2({
    minimumResultsForSearch: -1
});
$("#single-2").select2({
    minimumResultsForSearch: -1
});

$(document).ready(function () {
    $('#moreText').hide();
    $("#hide").click(function () {
        $('p#contentText').show();
        $("p#moreText").hide();
        $("a#show").show();
    });
    $("#show").click(function () {
        $('p#contentText').show();
        $("p#moreText").show();
        $("a#show").hide();
    });

    // Thankyou Page Radio
    $(".descform").hide();
    $("input[name$='contact']").click(function () {
        $(".descform").hide();
        $(".descform-email").hide();
        var value = $(this).val();
        $("#" + value).show();
    });

    // Donation Radio Payment
    $(document).ready(function () {
        $("#paypalValue").hide();
        $("input[name$='payment']").click(function () {
            $("#paypalValue").hide();
            $("#creditcardValue").hide();
            var value = $(this).val();
            $("#" + value).show();
        });
    });

    $('.input-phone').intlInputPhone();
});

// Campaign Page Slider
$('.campaign-slider1').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    // Autoplay
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    // Smart Speed
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 3,
            nav: false,
            margin: 5,
        },
        768: {
            items: 3,
            margin: 10,
        },
        992: {
            items: 3,
        }
    }
});

// Datepicker
$(document).ready(function () {
    $('#datePicker')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function (e) {
            // Revalidate the date field
            $('#eventForm').formValidation('revalidateField', 'date');
        });
});

// Campaign 4
$(document).ready(function () {
    $("#storyValue").hide();
    $("input[name$='fundraising']").click(function () {
        $("#storyValue").hide();
        $("#templateValue").hide();
        var value = $(this).val();
        $("#" + value).show();
    });
});

// Campaign 5
$(document).ready(function () {
    $("#teamcampValue").hide();
    $("input[name$='appealteam']").click(function () {
        $("#myownValue").hide();
        $("#teamcampValue").hide();
        var value = $(this).val();
        $("#" + value).show();
    });
});

// Show Add member form
$('.add-member-section').hide();
$('.pending-status').hide();

function showaddMemberForm() {
    $('.add-member-btn').hide();
    $('.add-member-section').show();
}
function sendInvite() {
    $('.send-invite-btn').hide();
    $('.pending-status').show();
    $('.add-member-section').hide();
}
function hideInviteForm() {
    $('.add-member-section').hide();
}

// CK Editor 1
DecoupledEditor
    .create(document.querySelector('#editor'), {
        fontSize: {
            options: ['8', '9', '10', '11', '12', '14', '16', '18', '20']
        },
        toolbar: ['fontSize', '|', 'bold', 'italic', 'underline', '|', 'link', 'imageUpload', 'mediaEmbed']
    })
    .then(editor => {
        const toolbarContainer = document.querySelector('#toolbar-container');
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
    })
    .catch(error => {
        console.error(error);
    });
// CK Editor 2
DecoupledEditor
    .create(document.querySelector('#editor-2'), {
        fontSize: {
            options: ['8', '9', '10', '11', '12', '14', '16', '18', '20']
        },
        toolbar: ['fontSize', '|', 'bold', 'italic', 'underline', '|', 'link', 'imageUpload', 'mediaEmbed']
    })
    .then(editor => {
        const toolbarContainer = document.querySelector('#toolbar-container-2');
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
    })
    .catch(error => {
        console.error(error);
    });


// Circle Progress
generatePieGraph('circle-chart1', {
    pie: 'stroke',
    values: [80],
    colors: ['#FFC107'],
    isStrokePie: {
        stroke: 10,
        overlayStroke: true,
        overlayStrokeColor: '#eee',
        strokeStartEndPoints: 'No',
        strokeAnimation: false,
        strokeAnimationSpeed: 20,
        fillTextData: false,
    }
});