$(function () {

	'use strict';

	$.each($('.select2'), function (i, el) {
		$(el).select2({
			minimumResultsForSearch: -1,
			theme: $(el).data('theme')
		});
	})


});
