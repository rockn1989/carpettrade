'use strict';

var CT = CT || {};


(function ($) {

	/**
	 * @typedef {Object} MapCoords
	 * @property {Number} lat Широта
	 * @property {Number} lng Долгота
	 */

	/**
	 * @constructor
	 * @param {HTMLElement} el Элемент, где отрисовать карту
	 * @param {MapCoords} coords Координаты центра и маркера
	 */
	function Map (el, coords) {
		this.map = new google.maps.Map(el, {
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
		this.createMarker(coords);
	};

	Map.prototype.createMarker = function (coords) {
		this.marker = new google.maps.Marker({
			position: coords,
			map: this.map
		});
	};

	Map.prototype.setCoords = function (coords) {
		var newLatLng = new google.maps.LatLng(coords.lat, coords.lng);

		this.marker.setPosition(newLatLng);
		this.map.setCenter(newLatLng);
	};

	CT.createMap = function (el, coords) {
		return new Map (el, coords);
	};
})(jQuery);
