'use strict';

angular.module('try')
.config(function($routeProvider, $locationProvider){
	$routeProvider.
		when('/',{
			template: '<blog-list></blog-list>'
		}).
		when('/in',{
			template: 'index'
		}).
		when('/about',{
			templateUrl: '/templates/about.html'
		}).
		when('/blog/:id',{
			template: '<blog-detail></blog-detail>'
		}).
		otherwise({
			template: 'NOt FOund'
		})
});


