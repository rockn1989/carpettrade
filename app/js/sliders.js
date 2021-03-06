'use strict';

$(function () {

	$('.main-slider').slick({
		arrows: true,
		dots: true,
		infinity: true,
		cssEase: 'linear',
		autoplay: false,
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

	// PRODUCT SLIDER

	$('.products-slider .sliders-list').slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		autoplay: false,
		autoplaySpeed: 3000,
		speed: 1500,
		centerMode: true,
		centerPadding: '130px',
		lazyLoad: 'progressive',
		prevArrow: '<div class="btn-slide slick-prev"><i class="icon-arrow-left"></i></div>',
		nextArrow: '<div class="btn-slide slick-next"><i class="icon-arrow-right"></i></div>',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 940,
				settings: {
					centerPadding: '0',
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerPadding: '0',
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerPadding: '0',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// MAP SLIDER

	var map;

	if($('.slide__map').length !== 0) {
		var $map = $('#map'),
			offsetPosition = {
				offsetX: 0.025,
				offsetY: -0.03
			};

			if($(window).width() <= 960 ) {
				offsetPosition = {
					offsetX: 0,
					offsetY: 0
				};
			};

		map = CT.createMap($map[0], $('.map-slider .slide').eq(0).data('coords'), offsetPosition);
	};


	var $currentsSlides = $('.counter__current-slide'),
		$allSlides = $('.counter__all-slides'),
		$mapSlider = $('.map-slider');

	$mapSlider.on('init', function (event, slick) {
		$allSlides.text(slick.slideCount);
		$currentsSlides.text(1);
	})

	$mapSlider.slick({
		arrows: true,
		dots: true,
		infinity: true,
		cssEase: 'linear',
		autoplay: false,
		fade: true,
		autoplaySpeed: 2000,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $(this).find('.slide-prev'),
		nextArrow: $(this).find('.slide-next'),
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
	}).on('afterChange', function(event, slick, currentSlide, nextSlide) {
		var coords = $(slick.$slides[currentSlide]).data('coords');
		map.setCoords(coords, offsetPosition);

		$currentsSlides.text(currentSlide + 1);
	});




	// DETAIL SLIDER

	 $('.detail-product-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		lazyLoad: 'progressive',
		asNavFor: '.detail-product-preview-slider',
		responsive: [
		{
			breakpoint: 959,
			settings: {
			centerMode: true,
			centerPadding: '180px',
			}
		},
		{
			breakpoint: 767,
			settings: {
				centerMode: false,
				centerPadding: '0px',
			}
		},
	]
	});

	$('.detail-product-preview-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.detail-product-slider',
		dots: false,
		infinity: true,
		centerMode: false,
		lazyLoad: 'progressive',
		focusOnSelect: true,
		vertical: true,
		prevArrow: '<div class="btn-slide slick-prev"><i class="icon-up-arrow"></i></div>',
		nextArrow: '<div class="btn-slide slick-next"><i class="icon-down-arrow"></i></div>',
		responsive: [
		{
			breakpoint: 1245,
			settings: {
				slidesToShow: 3,
				vertical: true
			}
		},
		{
			breakpoint: 1244,
			settings: {
				slidesToShow: 3,
				vertical: false,
		}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				vertical: false,
			}
		},
	]
	});

$(window).on('orientationchange', function () {
	$('.detail-product-preview-slider').slick('resize');
})


	// SHOPS DETAIL SLIDER

	if($('.shop-map').length !== 0) {
		var $map = $('.shop-map');
		map = CT.createMap($map[0], $map.data('coords'));
	};

	$('.shop-slider').slick({
		arrows: true,
		prevArrow: $(this).find('.slide-prev'),
		nextArrow: $(this).find('.slide-next')
	});

});
