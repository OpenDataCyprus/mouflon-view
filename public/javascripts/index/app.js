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
			{ name: 'Giakoumis o\' Krikos', image: 'http://i3.cpcache.com/product_zoom/937089130/mouflon_round_ornament.jpg?height=250&width=250&padToSquare=true'},
			{ name: 'Giakoumis o\' Krikos', image: 'http://i3.cpcache.com/product_zoom/937089130/mouflon_round_ornament.jpg?height=250&width=250&padToSquare=true'},
			{ name: 'Giakoumis o\' Krikos', image: 'http://i3.cpcache.com/product_zoom/937089130/mouflon_round_ornament.jpg?height=250&width=250&padToSquare=true'},
			{ name: 'Giakoumis o\' Krikos', image: 'http://i3.cpcache.com/product_zoom/937089130/mouflon_round_ornament.jpg?height=250&width=250&padToSquare=true'}
		];

		vm.scrollTo = scrollTo;

		function scrollTo(className){
			var offset = 25,
				duration = 1000,
				el = angular.element($window.document.getElementsByClassName(className)[0]);

			$document.scrollToElement(el, offset, duration);
		}
	}
})();