
angular.module('app', ['myNavbar'])

.controller('appCtrl', function($scope){
	$scope.c = function(red) {
		$scope.theme = red;
	};

	$scope.colors = [
		{text:'blue', g:'blue-theme'},
		{text:'red', g:'red-theme'},
		{text:'purple', g:'purple-theme'},
		{text:'green', g:'green-theme'},
		{text:'gray', g:'gray-theme'},
		{text:'default', g:'default-theme'},
		{text:'inverse', g:'inverse-theme'},
		{text:'white', g:'white-theme'}
	]
});