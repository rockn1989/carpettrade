
var CT = CT || {};

$(function() {

	// MAIN SLIDER

/*	$('div.preload').each(function(i, el) {
		var imgSrc = $(el).find('.slide__inner').css('background-image') ||
								 $(el).find('.slide').css('background-image');
		if(imgSrc) {
			var src = imgSrc.replace(/(^url\()|(\)$|[\"\'])/g, ''),
					img = $('<img>').attr('src', src).on('load', function() {
						$(el).removeClass('preload');
					});
		}
	});
*/

	$('div.preload').each(function(i, el) {
		var imgSrc = $(el).find('[data-preload]').css('background-image');
		if(imgSrc) {
			var src = imgSrc.replace(/(^url\()|(\)$|[\"\'])/g, ''),
					img = $('<img>').attr('src', src).on('load', function() {
						$(el).removeClass('preload');
					});
		}
	});


	// SHOW FORM

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
			console.log(e.target)
			$(form).fadeOut('350', function() {
				$(input).val('');
				$(this).removeClass('show');
				$('.header__top-contacts-links').fadeIn('350');
				$(document).unbind('click keyup', hiddenSearchForm);
			});
		};
	};


	// SHOW MOBILE FORM
	var $mobileForm = $('.mobile-form');

	$('.js__show-form').on('click', function (e) {
		e.preventDefault();
		$mobileForm.slideToggle('350').find('input').focus();
	})


	// MASK FORM

	$('.js__input-phone').mask('+7 999 999-99-99', {clearIfNotMatch: true}).focus(function (e) {
		if (!$(this).val()) {
			$(this).val('+7 ');
		}
	});


	//FORM VALIDATE

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


	// OPEN MOBILE SUBMENU
	
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


	// OPEN MOBILE FOOTER SUBMENU
	
	$('[data-role="toggle-list"] i').on('click', function (e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.parent('[data-role="toggle-list"]'),
			siblingsList = blockParent.siblings('.footer__list');

		self.toggleClass('open');
		siblingsList.stop().slideToggle('350');
	});


	// DISABLED UIKIT ANIMATION FOR MOBILE

	UIkit.on('beforeready.uk.dom', function () {
		if (UIkit.$win.width() < 767 && $('html').hasClass('uk-touch')) {
			UIkit.$('[data-uk-scrollspy]').removeAttr('data-uk-scrollspy');
		}
	});

});

