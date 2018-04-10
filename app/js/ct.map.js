
/* function moveMarker(lat, lng) {
    var lat = parseFloat(lat);
    var lng = parseFloat(lng);
    var newLatLng = new google.maps.LatLng(lat, lng);

    marker.setPosition(newLatLng);
    map.setCenter(newLatLng);
}*/

/*	var Map = (function ($) {
		var _self = this,
			coord = $('.map-slider .slide').data('coords'),
				lat = parseFloat(coord.lat),
				lng = parseFloat(coord.lng);
		return coord
	})(jQuery);*/

/*	if($('div').is('.map-slider')) {
		var coord = $('.map-slider .slide').data('coords');

		var lat = parseFloat(coord.lat),
				lng = parseFloat(coord.lng);

		 function initMap(lat, lng) {
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

		initMap(lat, lng);
	}
*/
var CT = CT || {};

(function ($) {

	'use strict';

	CT.map = (function () {
		var map,
				marker,
				coords = $('.map-slider .slide').eq(0).data('coords');
				if(!coords) {
					return false;
				}
		function initMap () {
				var coords = getCoords();
				map = new google.maps.Map(document.getElementById('map'), {
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
				marker = new google.maps.Marker({
					position: coords,
					map: map
				});
		};

		function getCoords () {
			var lat = parseFloat(coords.lat),
					lng = parseFloat(coords.lng);
			return {
				lat: lat,
				lng: lng
			};
		};

		function changeCoords (lat, lng) {
	    var lat = parseFloat(lat),
	    		lng = parseFloat(lng),
	    	 newLatLng = new google.maps.LatLng(lat, lng);

	    marker.setPosition(newLatLng);
	    map.setCenter(newLatLng);
		};

		return {
			init: initMap,
			getCoord: getCoords,
			changeCoords: changeCoords
		}
	});
})(jQuery);
