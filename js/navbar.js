angular.module('g3org3', [])
.directive('navbar', function(){
	return {
		replace: true,
		restrict: 'E',
		transclude: true,
		scope: {
        	titulo: '@title',
        	type: '@theme',
        	static: '@type',
        	ngTheme: '=',
        	href: '@'
      	},
		template: "<div class='navbar navbar-{{type}} navbar-{{ngTheme}} navbar-{{static}}-top' role='navigation'><div class='container'><a class='navbar-brand' href='{{href}}'>{{titulo}}</a><div class='navbar-collapse collapse'><ul class='navbar-nav nav' ng-transclude></ul></div></div></div>"
	};
})
.directive('container', function(){
	return {
		replace: true,
		restrict: 'E',
		transclude: true,
		scope: {
			clase: '@class'
		},
		template: "<div class='container {{clase}}' ng-transclude></div>"
	};
})
.directive('view', function(){
	return {
		replace: true,
		restrict: 'E',
		template: "<div class='container' ng-view></div>"
	};
})
.filter('fecha', function() {
  return function(input) {
    return moment(input).fromNow();
  };
})
.directive('c', function(){
	return {
		replace: true,
		restrict: 'E',
		transclude: true,
		template: "<span class='c'>//<span ng-transclude></span></span>"
	};
})
.directive('s', function(){
	return {
		replace: true,
		restrict: 'E',
		transclude: true,
		template: "<span class='s' ng-transclude></span>"
	};
})
.directive('tg', function(){
	return {
		replace: true,
		restrict: 'E',
		transclude: true,
		template: "<span class='tg' ng-transclude></span>"
	};
})
.directive('var', function(){
	return {
		replace: true,
		restrict: 'E',
		transclude: true,
		template: "<span class='var' ng-transclude></span>"
	};
})
.directive('r', function(){
	return {
		replace: true,
		restrict: 'E',
		transclude: true,
		template: "<span class='r' ng-transclude></span>"
	};
})









