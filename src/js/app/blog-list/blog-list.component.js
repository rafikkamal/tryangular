'use strict';
angular.module('blogList')
.component('blogList', {
	//template: "<div class=''><h1>{{name}}</h1><button ng-click='clickMe()'>Click</button></div>",
	templateUrl: 'templates/blog-list.html',
	controller: function(Post, $scope, $routeParams){
		
		$scope.items = Post.query();

		// console.log('$routeParams : '+$routeParams.id)

		// var blogItems =[
		// 	{title: "Some title 1", id:1, description:"This is a book"},
		// 	{title: "Some title 2", id:2, description:"This is a book"},
		// 	{title: "Some title 3", id:3, description:"This is a book"},
		// 	{title: "Some title 4", id:4, description:"This is a book"}
		// ]

		// $scope.items = blogItems

	}
});