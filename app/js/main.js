
var CT = CT || {};

$(function() {

	// Главный слайдер


	function preloadImg (targetElement) {

		var _self = $(targetElement);

		_self.each(function(i, el) {

			var imgSrc = $(el).find('[data-bg-preload]').css('background-image') || $(el).find('img');


			// Если картинка лежит фоном

			if(typeof imgSrc == 'string') {
				var src = imgSrc.replace(/(^url\()|(\)$|[\"\'])/g, ''),
					img = $('<img>').attr('src', src).on('load', function() {
						_self.removeClass('preload');
					});
			} else {

				// Если картинка лежит через тег img

				$.each(imgSrc, function (i, el) {
					var src = $(el).attr('src');
					$('<img>').attr('src', src).on('load', function() {
						_self.removeClass('preload')
					});
				});
			}

		});
	};


	preloadImg('div.preload');


	// Показывать форму в шапке

	$('.js__search-form').on('click', function(e) {
		e.preventDefault();
		$('.header__top-contacts-links').fadeOut('350', function() {
			$('.search-form').fadeIn('350', function() {
				$('.search-form').addClass('show').find('input').focus();
			});
			console.log(123)
			$(document).on('click keyup', hiddenSearchForm);
		});
	});

	function hiddenSearchForm (e) {
		var form = document.querySelector('.search-form'),
			input = document.querySelector('.search-form input'),
				btn = document.querySelector('js__search-form');

		if((e.which == 27) || (e.target != input && e.target != btn) && $(form).hasClass('show')) {
			$(form).fadeOut('350', function() {
				$(input).val('');
				$(this).removeClass('show');
				$('.header__top-contacts-links').fadeIn('350');
				$(document).unbind('click keyup', hiddenSearchForm);
			});
		};
	};


	// Показывать форму на мобильных устройствах

	var $mobileForm = $('.mobile-form');

	$('.js__show-form').on('click', function (e) {
		e.preventDefault();
		$mobileForm.slideToggle('350').find('input').focus();
	})


	// Маска формы

	$('.js__input-phone').mask('+7 999 999-99-99', {clearIfNotMatch: true}).focus(function (e) {
		if (!$(this).val()) {
			$(this).val('+7 ');
		}
	});


	// Валидация формы

	if($('form').is('.default-form')) {

		$('.default-form').validate({
			rules: {
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				email: "Обязательноe поле",
			},
		});
	};


	// Открытие мобильного подменю

	$('.js__menu-sublist-toggle').on('click', function (e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.parent('a'),
			siblingsList = blockParent.siblings('.menu-sublist');

		if(blockParent.hasClass('open')) {
			siblingsList.stop().slideUp('350', function () {
				blockParent.removeClass('open');
			});
		} else {
			siblingsList.stop().slideDown('350', function () {
				blockParent.addClass('open');
			});
		}

		self.toggleClass('open');
	});


	// Открытие мобильного подменю в футере

	$('[data-role="toggle-list"] i').on('click', function (e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.parent('[data-role="toggle-list"]'),
			siblingsList = blockParent.parent().find('.footer__list');

		self.toggleClass('open');
		siblingsList.stop().slideToggle('350');
	});


	// SELECT2 плагин

	$.each($('.select2'), function (i, el) {
		$(el).select2({
			minimumResultsForSearch: -1,
			theme: $(el).data('theme')
		});
	});


	// Отключение UIKIT анимации для мобильных устройств

	UIkit.on('beforeready.uk.dom', function () {
		if (UIkit.$win.width() < 767 && $('html').hasClass('uk-touch')) {
			UIkit.$('[data-uk-scrollspy]').removeAttr('data-uk-scrollspy');
		};
	});

});



