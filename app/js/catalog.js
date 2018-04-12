$(function () {

	'use strict';

	$.each($('.select2'), function (i, el) {
		$(el).select2({
			minimumResultsForSearch: -1,
			theme: $(el).data('theme')
		});
	})

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

});
