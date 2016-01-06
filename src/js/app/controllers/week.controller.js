app.controller('weekCtrl', ['$scope', 'weekService', 'timeService', function($scope, weekService, timeService) {

	$scope.weekService = weekService;
	$scope.weeks = weekService.weeks;

	// $scope.$watch('weekService.selectedDay', function (newVal, oldVal, scope) {
	// 	if(newVal) { 
	// 		scope.foo = newVal;
	// 	}
	// });		

	$scope.selectDay = function(day) {
		if(day.isActive) {
			// console.log(day.moment);
			weekService.selectedDay = day.moment;
			timeService.selectedDay = day.moment;
			// timeService.timesArray.length = 0;
			timeService.getTimes(weekService.selectedDay);
		}
	}

}]);