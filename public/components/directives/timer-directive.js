'use strict';

angular.module('myApp.directives', [])
	.directive('timer', function($interval) {
		return {
			restrict: 'E',
			scope: {
				seconds: '@',
			},
			template: "<h2>{{seconds}} seconds remaining</h2>",
			link: function(scope, element) {
				var tick = $interval(function() {
					scope.seconds -= 1;
					if (scope.seconds <= 0) {
						scope.$emit('timer-ended');
						$interval.cancel(tick);
					};

					//performance: clear the interval if the user leaves game controller
					scope.$on('$destroy', function() {
						$interval.cancel(tick);
					})
				}, 1000);
			}
		};
});