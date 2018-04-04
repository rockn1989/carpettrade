'use strict';

var CP = CP || {};

$(function() {

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
