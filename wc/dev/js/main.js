
angular.module('app', ['g3org3', 'ngRoute', 'firebase', 'ngTouch'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'mainCtrl',
		controllerAs: 'main'
	})
	.when('/error', {
		templateUrl: 'views/index.html'
	})
	.when('/:id', {
		template: 'id'
	})
	.otherwise({
		redirectTo: '/error'
	})
})
.controller('mainCtrl', ["$scope", "$firebase", mainCtrl]);