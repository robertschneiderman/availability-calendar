app.controller('timeCtrl', ['$scope', 'timeService', 'weekService', function($scope, timeService, weekService) {
	$scope.timeService = timeService;

	$scope.selectedDay = weekService.selectedDay;

	$scope.timeObjs = timeService.timesArray;

	// console.log(this.selectedDay);


	// console.log($scope.times);
}])