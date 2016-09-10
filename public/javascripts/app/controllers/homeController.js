(function(){
	'use strict';

	angular
		.module('MouflonView')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$scope', '$log'];

	function HomeController($scope, $log){
		$scope.selectedCountry = '';
		$scope.selectedCategory = '';

		$scope.countries = [
			{'name':'Cyprus','flag':'images/cyprus.jpg'}
		];

		$scope.selectCategory = selectCategory;

		function selectCategory(){
			$scope.selectedCategory = $scope.selectedCategory === 'tourism' ? '' : 'tourism';
		}
	}
})();
