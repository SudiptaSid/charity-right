// Menu Fixed 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $("#team-365-header").addClass("fixed-header");
    } else {
        $("#team-365-header").removeClass("fixed-header");
    }
});

// Video Player
$('#play').on('click', function (e) {
    e.preventDefault();
    $("#player")[0].src += "?autoplay=1";
    $('#player').show();
    $('#video-cover').hide();
    $('#play').hide();
});

// Custom Select
const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach(a => {
	a.addEventListener('click', b => {
		const next = b.target.nextElementSibling;
		next.classList.toggle('toggle');
		next.style.zIndex = index++;
	})
})
option.forEach(a => {
	a.addEventListener('click', b => {
		b.target.parentElement.classList.remove('toggle');
		
		const parent = b.target.closest('.cs-select').children[0];
		parent.setAttribute('data-type', b.target.getAttribute('data-type'));
		parent.innerText = b.target.innerText;
	})
})