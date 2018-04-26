$(function () {

	'use strict';

	// Каталог-детальная: открытие/закрытие таблицы

	var tableWrapperHeight = $('.tab-table-wrapper').outerHeight();

	$('.tab-table__links').on('click', function (e) {
		e.preventDefault();
		var tableWrapper = $(this).siblings('.tab-table-wrapper'),
				 tableHeight = tableWrapper.find('table').outerHeight();
		if(!$(this).hasClass('open')) {
			$(this).addClass('open');
			$('.tab-table-wrapper').animate({height: tableHeight+'px'}, 350);
		} else {
			$(this).removeClass('open');
			$('.tab-table-wrapper').animate({height: tableWrapperHeight+'px'}, 350)
		}

	});


	// Фильтр Каталога: скрыть на мобильных устройствах

	var filter = $('.responsive-filter');

	/**
	 * @param {string} filter Класс/id фильтра
	 */
	function filterInit() {
		var scrollWidth = parseInt(window.innerWidth) - parseInt(document.body.clientWidth);
		if(($(window).width() + scrollWidth) < 960) {
			if(!$(filter).hasClass('uk-offcanvas')) {
				$(filter).addClass('uk-offcanvas');
				$(filter).attr('id', 'offcanvas-filter');
				$(filter)
					.find('.catalog-filter')
					.wrap('<div class="uk-offcanvas-bar"></div>');
				};
		} else {
			$(filter).removeClass('uk-offcanvas');
			 $(filter).removeAttr('id', 'offcanvas-filter');
			 if($(filter).find('.catalog-filter').parent().hasClass('uk-offcanvas-bar')) {
				$(filter)
					.find('.catalog-filter')
					.unwrap('<div class="uk-offcanvas-bar"></div>');
			 }

		}
	};


	/**
	 * @param  {Function} Функция для троттлинга
	 * @param  {Number}   Время задержки
	 * @return {Function} Возвращает обернутую фун-ию
	 */
	function throttle (fn, time) {
		var lastTime = 0;
		return function () {
			if(Date.now() - lastTime >= time ) {
				fn.apply(arguments);
				lastTime = Date.now();
			}

		};
	};

	var filterInitBind = throttle(filterInit, 150);


	// Инициализация фильтра

	filterInitBind();

	$(window).resize(filterInitBind);

});



/*'use strict';
var CT = CT || {};

(function ($, CT, UIkit) {

	function Catalog () {
		this.init();
	};


	Catalog.prototype.init = function () {

		this.responsiveFilter('.responsive-filter','.catalog-filter');

		var responsiveFilterResize = this.throttle(this.responsiveFilter, 150);

		$(window).on('resize', function () {
			responsiveFilterResize('.responsive-filter','.catalog-filter');
		});
	};

	Catalog.prototype.responsiveFilter = function (filterWrapper, filterBlock) {
		var $fWrapper = $(filterWrapper),
			$fBlock = $(filterBlock),
			scrollWidth = parseInt(window.innerWidth) - parseInt(document.body.clientWidth);

		if(($(window).width() + scrollWidth) < 960) {
			if(!$fWrapper.hasClass('uk-offcanvas')) {
				$fWrapper.addClass('uk-offcanvas');
				$fWrapper.attr('id', 'offcanvas-filter');
				$fWrapper
					.find($fBlock)
					.wrap('<div class="uk-offcanvas-bar"></div>');
				};
		} else {
			$fWrapper.removeClass('uk-offcanvas');
			$fWrapper.removeAttr('id', 'offcanvas-filter');
			if($fWrapper.find($fBlock).parent().hasClass('uk-offcanvas-bar')) {
				$fWrapper
					.find($fBlock)
					.unwrap('<div class="uk-offcanvas-bar"></div>');
			};
		};

	};


	Catalog.prototype.throttle = function (fn, time) {
		var lastTime = 0;
		return function () {
			if(Date.now() - lastTime >= time ) {
				fn.apply(this, arguments);
				lastTime = Date.now();
			}
		};
	};

	CT.initCatalog = function () {
		return new Catalog();
	}

})(jQuery, CT, UIkit);
*/

