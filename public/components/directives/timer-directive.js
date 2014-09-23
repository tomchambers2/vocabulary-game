'use strict';

angular.module('myApp.directives', [])
	.directive('timer', function($interval) {
		return {
			restrict: 'E',
			scope: {
				seconds: '@',
				finish: '&'
			},
			template: "<h2>{{seconds}} seconds remaining</h2>",
			link: function(scope, element) {
				var tick = $interval(function() {
					scope.seconds -= 1;
					if (scope.seconds <= 0) {
						scope.finish();
						$interval.cancel(tick);
					};
				}, 1000)
			}
		}
})