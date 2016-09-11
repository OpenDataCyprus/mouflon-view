(function(){
	'use strict';

	angular
		.module('MouflonView', [
			'duScroll'
		])
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$scope', '$window', '$document'];

	function HomeController($scope, $window, $document){
		var vm = this;

		vm.team = [
			{ name: 'Stefanos Chrs', 			headline: 'The Doer', 			role: 'Developer', 	image: 'images/mouflon-1.jpg'},
			{ name: 'Andy Hadjiadamou', 		headline: 'The Manipulator', 	role: 'Marketing', 	image: 'images/mouflon-2.jpg'},
			{ name: 'Konstantinos Soteriou', 	headline: 'The Dreamer', 		role: 'Analyst', 	image: 'images/mouflon-3.jpg'},
			{ name: 'Nicolas Valanides', 		headline: 'The liar', 			role: 'Sales', 		image: 'images/mouflon-4.jpg'}
		];

		vm.scrollTo = scrollTo;

		function scrollTo(className){
			var offset = 0;
			var duration = 1000;
			var el = angular.element($window.document.getElementsByClassName(className)[0]);

			$document.scrollToElement(el, offset, duration);
		}
	}
})();
