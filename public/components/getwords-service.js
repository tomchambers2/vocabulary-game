'use strict';

angular.module('myApp.services')
	.factory('getWords', function(words, shuffleArray) {
		var usedWordsGame,
			usedWordsRound;

		var randomIndex = function(array) {
			return Math.floor(Math.random() * (array.length - 1));
		};

		var resetCache = function() {
			usedWordsGame = [];
			usedWordsRound = [];
		};

		var getFreshWord = function(freshForGame) {
			var pickedIndex = randomIndex(words);

			//check that this word has not been used before
			for (var i=0; i<usedWordsRound.length; i++) {
				if (pickedIndex === usedWordsRound[i]) {
					return getFreshWord(freshForGame);
				};
			}
			if (freshForGame) {
				for (var i=0; i<usedWordsGame.length; i++) {
					if (pickedIndex === usedWordsGame[i]) {
						return getFreshWord(freshForGame);
					};
				}
			};

			usedWordsRound.push(pickedIndex);
			if (freshForGame) {
				usedWordsGame.push(pickedIndex);
			}

			var wordsCopy = words.slice();
			return words[pickedIndex];
		};

		var loadWords = function() {
			usedWordsRound = [];
			var answer = getFreshWord(true);
			var wordTwo = getFreshWord();
			var wordThree = getFreshWord();

			var wordList = shuffleArray.shuffle([answer,wordTwo,wordThree]);

			var words = {
				answer: answer,
				wordList: wordList
			};

			return words;
		};

		var init = function() {
			resetCache();
		}

		return {
			init: init,
			loadWords: loadWords
		};
	});