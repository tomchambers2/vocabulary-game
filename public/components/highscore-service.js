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
		      console.log("Successfuly posted score data");
		    }).
		    error(function(data, status, headers, config) {
		      console.log('An error occurred, server gave status code: '+status)
		    });
		};

		var getScores = function() {
		    return $http({
		      method: 'GET',
		      url: '/api/highscore'
		    });	
		}

		return {
			submitScore: submitScore,
			getScores: getScores
		}
	});