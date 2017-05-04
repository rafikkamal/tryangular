'use strict';
angular.module('confirmClick', [])
.directive('confirmClick', function(){
	return{
		restrict: 'EA',
		template: '<a href="">Are U Sure?></a>',
		link: function(scope, element, attr){
			// console.log(scope)
			// console.log(element)
			// console.log(attr.confirmClick)
			// console.log(attr.ngHref)
			// console.log(attr.href)
		}
	}
})