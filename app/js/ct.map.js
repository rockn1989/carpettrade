var CT = CT || {};

/*CT.map = (function ($, CT) {
	var val = 1;
})(jQuery, CT);*/

/*
CT.map = function () {
	 function initMap() {
			var coords = {lat: -25.363, lng: 131.044};
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 4,
				center: coords
			});
			var marker = new google.maps.Marker({
				position: coords,
				map: map
			});
	};
};

CT.map.prototype.init = function() {
	initMap();
};


CT.map.init();*/
		
/*(function($, CT) {

'use strict';

CT.map = function() {
	var coord = $('.map-slider .slide__map').data('coords');

	var lat = parseFloat(coord.lat),
			lng = parseFloat(coord.lng);

	 function initMap() {
			var coords = {lat: lat, lng:lng};
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 12,
				center: coords,
				styles: [
					{
						"stylers": [
							{
								"saturation": -100
							}
						]
					},
					{
						"featureType": "administrative",
						"stylers": [
							{
								"saturation": -100
							}
						]
					},
					{
						"featureType": "administrative.country",
						"stylers": [
							{
								"saturation": -100
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#bad9e8"
							}
						]
					}
				 ]
			});
			var marker = new google.maps.Marker({
				position: coords,
				map: map
			});
	};

}

CT.map.prototype.updateCoords = function () {
	console.log(123);
};

})(jQuery, CT);
*/




/* function moveMarker(lat, lng) {
    var lat = parseFloat(lat);
    var lng = parseFloat(lng);
    var newLatLng = new google.maps.LatLng(lat, lng);

    marker.setPosition(newLatLng);
    map.setCenter(newLatLng);
}*/


	var coord = $('.slide__map').data('coords');

	var lat = parseFloat(coord.lat),
			lng = parseFloat(coord.lng);

	 function initMap() {
			var coords = {lat: lat, lng:lng};
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 12,
				center: coords,
				styles: [
					{
						"stylers": [
							{
								"saturation": -100
							}
						]
					},
					{
						"featureType": "administrative",
						"stylers": [
							{
								"saturation": -100
							}
						]
					},
					{
						"featureType": "administrative.country",
						"stylers": [
							{
								"saturation": -100
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#bad9e8"
							}
						]
					}
				 ]
			});
			var marker = new google.maps.Marker({
				position: coords,
				map: map
			});
	};

	initMap();
