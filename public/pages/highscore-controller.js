'use strict';

angular.module('myApp.controllers')
  .controller('HighscoreCtrl', function($scope, highScore) {
    highScore.getScores().then(function(result) {
    	$scope.highscores = result.data.highscores;
    });
  });