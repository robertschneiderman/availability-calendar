var app = angular.module('calendarApp', ['ngRoute', 'ngResource'])

.config([
	'$routeProvider',
	function($routeProvider) {

		$routeProvider
		.when('week', {
			url: '/week',
			templateUrl: '/week.html',
			controller: 'weekCtrl',
		})
		.when('times', {
			url: '/times',
			urlTemplate: '/times.html',
			controller: 'TimesCtrl'
		});
	}
])