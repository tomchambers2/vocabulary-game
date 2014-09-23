'use strict';

angular.module('myApp.services')
	.factory('shuffleArray', function(words) {
		//+ Jonas Raoni Soares Silva
		//@ http://jsfromhell.com/array/shuffle [v1.0]
		var shuffle = function(o){ //v1.0
		    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		    return o;
		};

		return {
			shuffle: shuffle
		}
	});