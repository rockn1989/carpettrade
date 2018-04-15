
$(function () {

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

	// PRODUCT SLIDER

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
	});

	// MAP SLIDER

	var map;

	if($('.slide__map').length !== 0) {
		var $map = $('#map');

		map = CT.createMap($map[0], $('.map-slider .slide').eq(0).data('coords'));
	};

	$('.map-slider').slick({
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
	}).on('afterChange', function(event, slick, currentSlide, nextSlide) {
		var coords = $(slick.$slides[currentSlide]).data('coords');

		map.setCoords(coords);
	});


	// DETAIL SLIDER

 var sliderTotal = $(window).width() >= 1245 ? 3 : 3,
			sliderPosition = $(window).width() >= 1245 ? true : false;

 $('.detail-product-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	lazyLoad: 'progressive',
	prevArrow: '<div class="btn-slide slick-prev"><i class="icon-arrow-left"></i></div>',
	nextArrow: '<div class="btn-slide slick-next"><i class="icon-arrow-right"></i></div>',
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
	slidesToShow: sliderTotal,
	slidesToScroll: 1,
	asNavFor: '.detail-product-slider',
	dots: false,
	infinity: true,
	centerMode: false,
	lazyLoad: 'progressive',
	focusOnSelect: true,
	vertical: sliderPosition,
	prevArrow: '<div class="btn-slide slick-prev"><i class="icon-up-arrow"></i></div>',
	nextArrow: '<div class="btn-slide slick-next"><i class="icon-down-arrow"></i></div>',
});
});
