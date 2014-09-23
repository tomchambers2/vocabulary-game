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
	   	//false: set inprogress to false, game over

    };

    $scope.submitScore = function() {
    	highScore.submitScore($scope.form.name, $scope.status.score)
    }

    loadNewWords();
  });



