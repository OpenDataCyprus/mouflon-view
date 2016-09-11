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
			{ name: 'Stefanos Chrs', 			linkedin: '', role: 'Developer', image: 'http://i3.cpcache.com/product_zoom/937089130/mouflon_round_ornament.jpg?height=250&width=250&padToSquare=true'},
			{ name: 'Andy Hadjiadamou', 		linkedin: '', role: '', image: 'http://www.les-belles-images.com/pg_animaux_15_en/mammif_L_M/image_th/th_Mouflon%20canadien%20(Ovis%20canadensis)%20[Richard%20Giddins]%20(CCA%202.0)%20(WKP).jpg'},
			{ name: 'Konstantinos Soteriou', 	linkedin: '', role: '', image: 'http://i3.cpcache.com/product_zoom/937136705/mouflon_round_ornament.jpg?height=250&width=250&padToSquare=true'},
			{ name: 'Nicolas Valanides', 		linkedin: '', role: '', image: 'http://www.chasse38.com/wp-content/uploads/2016/04/mouflon-250x250.jpg'}
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