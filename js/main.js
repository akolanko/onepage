$(document).ready( function() {

	$('.lightbox-click').click( function() {

		$('#lightbox-img-container img').hide();

		var newImg = $("<img></img>");

		newImg.attr('src', $(this).attr('src'));
		newImg.css('width', '453px');

		$('#lightbox-img-container').html(newImg);

		$('.lightbox-wrapper').fadeIn();
		$('body').addClass('lightbox-on');
	});

	$('#close-button').click( function() {
		$('.lightbox-wrapper').fadeOut();
		$('body').removeClass('lightbox-on');
	});

	var firstSectionHeight = $('section').eq(0).height();

	$(window).scroll(function() {
		if($(window).scrollTop() > firstSectionHeight && $('nav').css('position') != "fixed") {

			$('nav').hide(function() {
				$('nav').css('position', 'fixed');
				$('nav').slideDown('1000');
			});
		}
		else if($(window).scrollTop() <= firstSectionHeight){
			$('nav').css('position', 'initial');
		}

	});

	$('nav a').click(function(event) {
		event.preventDefault();

		var id = $(this).attr("href");

		var sectionTop = $(id).offset().top;

		var navHeight = $('nav').height();

		$.scrollTo(sectionTop - (navHeight + 10), 2000);

	});

});