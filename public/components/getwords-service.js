'use strict';

angular.module('myApp.services')
	.factory('getWords', function(words) {
		var usedWordsGame = [];
		var usedWordsRound = [];

		var randomIndex = function(array) {
			return Math.floor(Math.random() * (array.length - 1));
		};	

		var shuffleArray = function(array) {
			return array;
		};

		var resetCache = function() {
			usedWordsGame = [];
			usedWordsRound = [];
		};

		var getFreshWord = function(excluded) {
			var pickedIndex = randomIndex(words);
			console.log(pickedIndex);
			
			//check that this word has not been used before
			for (var i=0; i<usedWordsGame.length; i++) {
				if (pickedIndex === usedWordsGame[i]) {
					console.log('used');
				}
			}

			usedWordsRound.push(pickedIndex);

			var wordsCopy = words.slice();
			return words[pickedIndex];
		};		

		var loadWords = function() {
			usedWordsRound = [];
			var answer = getFreshWord(usedWordsGame);
			var wordTwo = getFreshWord(usedWordsRound);
			var wordThree = getFreshWord(usedWordsRound);

			var words = [answer,wordTwo,wordThree];

			return shuffleArray(words);
		};		

		return {
			loadWords: loadWords
		};
	});