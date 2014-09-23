'use strict';

angular.module('myApp.controllers')
  .controller('GameCtrl', function($scope, getWords, highScore) {
  	var scoreIncrement = 100;

    $scope.status = {
    	round: 1,
    	score: 0,
    	inProgress: true
    };

    var loadNewWords = function() {
    	$scope.words = getWords.loadWords();
    };

    $scope.checkAnswer = function(index) {
    	if (index === $scope.words.answer) {
    		$scope.score += scoreIncrement;
    		loadNewWords();

	    	if ($scope.status.round > 2) {
	    		$scope.status.inProgress = false;
	    	} else {
	    		$scope.status.round += 1;
	    	}
	    } else {
	    	$scope.status.inProgress = false;
	    };
    };

    $scope.submitScore = function() {
    	//TODO: add validation to stop empty name submission

    	highScore.submitScore($scope.form.name, $scope.status.score);
    	$location.path('/highscore');
    }

    loadNewWords();
  });



