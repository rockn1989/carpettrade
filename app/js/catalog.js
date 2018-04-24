$(function () {

	'use strict';

	// SELECT2

	$.each($('.select2'), function (i, el) {
		$(el).select2({
			minimumResultsForSearch: -1,
			theme: $(el).data('theme')
		});
	})


	// CATALOG DETAIL TABLE

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


	// CATALOG FILTER RESPONSIVE
	
	var filter = $('.responsive-filter');

	function filterInit() {
		if($(window).width() <= 959) {
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

	function throttle (fn, time) {
		return function () {
			
			var start = Date.now(),
				lastTime = 0;
			if(start - lastTime >= time ) {
				console.log(123)
				fn();
				
			}
			lastTime = Date.now();
		};
	};

	var filterInitBind = throttle(filterInit, 31000);
	console.log(filterInitBind)
	$(window).resize(function() {
		 filterInitBind();
	});
	
	filterInitBind();

});
