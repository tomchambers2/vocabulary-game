'use strict';

angular.module('myApp.controllers')
  .controller('GameCtrl', function($scope, $location, getWords, highScore, shuffleArray) {
  	var scoreIncrement = 100;

    $scope.status = {
    	round: 1,
    	score: 0,
    	inProgress: true
    };
    $scope.form = {
        name: ''
    };

    getWords.init();

    var loadNewWords = function() {
    	$scope.words = getWords.loadWords();
    };

    $scope.checkAnswer = function(answer) {
    	if (answer === $scope.words.answer.es) {
    		$scope.status.score += scoreIncrement;
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



