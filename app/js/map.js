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
	function Map (el, coords, offsetPosition) {
		this.offsetPosition = offsetPosition || 0;
		this.map = new google.maps.Map(el, {
			zoom: 12,
			center: this.setCenter(coords, this.offsetPosition),
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
		var image = 'img/icon-png/marker.png';
		this.marker = new google.maps.Marker({
			position: coords,
			map: this.map,
			icon: image
		});
	};

	Map.prototype.setCoords = function (coords) {
		var offsetPosition = this.offsetPosition || 0,
			offsetX = this.offsetPosition.offsetX || 0,
			offsetY = this.offsetPosition.offsetY || 0;

		var newLatLngMarker = new google.maps.LatLng(coords.lat, coords.lng);
		var newLatLngMap = new google.maps.LatLng(coords.lat+ offsetX, coords.lng+ offsetY);

		this.marker.setPosition(newLatLngMarker);
		this.map.setCenter(newLatLngMap);
	};

	Map.prototype.setCenter = function (coords) {
		var offsetPosition = this.offsetPosition || 0,
			offsetX = this.offsetPosition.offsetX || 0,
			offsetY = this.offsetPosition.offsetY || 0;
		return {lat: (coords.lat + offsetX), lng: (coords.lng + offsetY)}
	};

	CT.createMap = function (el, coords, offsetPosition) {
		return new Map (el, coords, offsetPosition);
	};
})(jQuery);
