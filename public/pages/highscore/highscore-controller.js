'use strict';

angular.module('myApp.controllers')
  .controller('HighscoreCtrl', function($scope, highScore) {
    highScore.getScores().then(function(result) {
    	$scope.highscores = result.data.highscores;
    }, function(error) {
    	throw new Error('The API could not be contacted',error);
    });
  });