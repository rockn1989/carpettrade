'use strict';

var CP = CP || {};

$(function() {

	/* MAIN SLIDER */

	$('div.preload').each(function(i, el) {
		var imgSrc = $(el).find('.slide__inner').css('background-image');
		if(imgSrc) {
			var src = imgSrc.replace(/(^url\()|(\)$|[\"\'])/g, ''),
					img = $('<img>').attr('src', src).on('load', function() {
						$(el).removeClass('preload');
					});
		}
	});

	$('.main-slider').slick({
		arrows: true,
		dots: true,
		infinity: true,
		cssEase: 'linear',
		autoplay: true,
		fade: true,
		autoplaySpeed: 2000,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="btn-slide slick-prev"><i class="icon-arrow-left"></i></div>',
		nextArrow: '<div class="btn-slide slick-next"><i class="icon-arrow-right"></i></div>',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 940,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	/* PRODUCT SLIDER */

	$('.products-slider .sliders-list').slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1500,
		centerMode: true,
		centerPadding: '130px',
		prevArrow: '<div class="btn-slide slick-prev"><i class="icon-arrow-left"></i></div>',
		nextArrow: '<div class="btn-slide slick-next"><i class="icon-arrow-right"></i></div>',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 940,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	})

	/* SHOW FORM */

	$('.js__search-form').on('click', function(e) {
		e.preventDefault();
		$('.header__top-contacts-links').fadeOut('350', function() {
			$('.search-form').fadeIn('350', function() {
				$('.search-form').addClass('show').find('input').focus();
			});
			$(document).on('click keyup', hiddenSearchForm);
		});
	});

	function hiddenSearchForm (e) {
		var form = document.querySelector('.search-form'),
			input = document.querySelector('.search-form input'),
				btn = document.querySelector('js__search-form');
		if(((e.which == 27) && (e.target != input || e.target != btn)) && $(form).hasClass('show')) {
			$(form).fadeOut('350', function() {
				$(input).val('');
				$(this).removeClass('show');
				$('.header__top-contacts-links').fadeIn('350');
				$(document).unbind('click keyup', hiddenSearchForm);
			});
		};
	};

	/* DISABLED UIKIT ANIMATION FOR MOBILE */

	UIkit.on('beforeready.uk.dom', function () {
		if (UIkit.$win.width() < 767 && $('html').hasClass('uk-touch')) {
			UIkit.$('[data-uk-scrollspy]').removeAttr('data-uk-scrollspy');
		}
	});

});
