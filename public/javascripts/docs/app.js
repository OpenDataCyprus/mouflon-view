(function(){
	'use strict';

	angular
		.module('MouflonView', [])
		.controller('HomeController', HomeController);

	function HomeController(){
		var vm = this;

		vm.categories = [
			{
				title: 'Tourism',
				endpoints: [
					{ url: '/api/raw/tourism', name: 'Tourism', description: '' },
					{ url: '/api/raw/tourism', name: 'Tourism', description: '' },
					{ url: '/api/raw/tourism', name: 'Tourism', description: '' },
					{ url: '/api/raw/tourism', name: 'Tourism', description: '' },
					{ url: '/api/raw/tourism', name: 'Tourism', description: '' }
				]
			}
		];
	}
})();