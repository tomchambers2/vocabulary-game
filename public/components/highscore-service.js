'use strict';

angular.module('myApp.services')
	.factory('highScore', function($http, words) {
		var submitScore = function(name, score) {
			console.log('Sending score to API')
		    $http({
		      method: 'POST',
		      url: '/api/submit',
		      data: {
		      	name: name,
		      	score: score
		      }
		    }).
		    success(function(data, status, headers, config) {
		      console.log(status);
		    }).
		    error(function(data, status, headers, config) {
		      console.log('Error!')
		    });
		};

		var getScores = function() {
		    return $http({
		      method: 'GET',
		      url: '/api/highscore'
		    }).
		    success(function(data, status, headers, config) {
		    	
		    }).
		    error(function(data, status, headers, config) {
		      //$scope.name = 'Error!'
		    });			
		}

		return {
			submitScore: submitScore,
			getScores: getScores
		}
	});