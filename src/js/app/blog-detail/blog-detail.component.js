'use strict';
angular.module('blogDetail')
.component('blogDetail', {
	templateUrl: 'templates/blog-detail.html',
	controller: function(Post, $http, $scope, $routeParams, $location){

		//console.log(Post.query())
		//console.log(Post.get())

		Post.query(function(data){
			$scope.notFound = true
			angular.forEach(data, function(post){
				if(post.id == $routeParams.id){
					$scope.post = post
					$scope.notFound = false
				}
			})
		})

		/*
		#XAMPP
		$http.get("/angular_project/tryangular/src/json/post.json").then()
		*/
		// $http.get("/json/post.json").then(successCallBack, errorCallBack);

		// function successCallBack(response, status, config, statusText){
		// 	$scope.notFound = true
		// 	var blogItems = response.data
		// 	angular.forEach(blogItems, function(post){
		// 		if(post.id == $routeParams.id){
		// 			$scope.post = post
		// 			$scope.notFound = false
		// 		}
		// 	})
		// }

		// function errorCallBack(response, status, config, statusText){
		// 	$scope.notFound = true
		// }


		if($scope.notFound){
			$location.path('/')
		}

	}
});