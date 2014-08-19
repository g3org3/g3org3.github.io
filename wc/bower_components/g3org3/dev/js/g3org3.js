angular.module('g3org3', [])
.directive('navbar', function(){
	return {
		replace: true,
		restrict: 'E',
		transclude: true,
		scope: {
        	title: '@',
        	theme: '@',
        	type: '@',
        	ngTheme: '=',
        	href: '@'
      	},
		template: "<div class='navbar navbar-{{theme}} navbar-{{ngTheme}} navbar-{{type}}-top' role='navigation'>"+
		"<div class='container'>"+
			"<div class='navbar-header'>"+
				"<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>"+
					"<span class='sr-only'>Toggle navigation</span>"+
					"<span class='icon-bar'></span>"+
					"<span class='icon-bar'></span>"+
					"<span class='icon-bar'></span>"+
				"</button>"+
				"<a class='navbar-brand' ng-href='{{href}}'>{{title}}</a>"+
			"</div><div ng-transclude></div>"+
		"</div></div>"
	};
})
.directive('debug', function(){
	return {
		replace: true,
		restrict: 'E',
		scope: {
			code: '='
		},
		template: "<pre>{{code|json}}</pre>"
	};
})
.directive('menu', function(){
	return {
		replace: true,
		restrict: 'E',
		transclude: true,
		scope: {},
		template: "<div class='navbar-collapse collapse'>"+
          "<ul class='nav navbar-nav' ng-transclude>"+
          "</ul></div>"
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

.directive('metaMobileApp', function(){
	return {
		replace: true,
		restrict: 'E',
		template: "<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no, minimal-ui'>"
	};
})
.directive('dropdown', function(){
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: {
			title: '@',
			href: '@'
		},
		template: "<li class='dropdown'>"+
	      "<a ng-href='{{href}}' class='dropdown-toggle' data-toggle='dropdown'>{{title}} <span class='caret'></span></a>"+
	      "<ul class='dropdown-menu' role='menu' ng-transclude>"+
	      "</ul></li>"
	};
})



//  DEV DIRECTIVES

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









