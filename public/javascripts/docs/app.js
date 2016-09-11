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
					{ type: 'GET', url: '/api/raw/tourism', name: 'Tourism', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis excepturi ipsam laboriosam minima nam officia quam voluptatibus. 1' },
					{ type: 'GET', url: '/api/raw/tourism', name: 'Tourism', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis excepturi ipsam laboriosam minima nam officia quam voluptatibus. 2' },
					{ type: 'GET', url: '/api/raw/tourism', name: 'Tourism', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis excepturi ipsam laboriosam minima nam officia quam voluptatibus. 3' },
					{ type: 'GET', url: '/api/raw/tourism', name: 'Tourism', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis excepturi ipsam laboriosam minima nam officia quam voluptatibus. 4' },
					{ type: 'GET', url: '/api/raw/tourism', name: 'Tourism', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis excepturi ipsam laboriosam minima nam officia quam voluptatibus. 5' }
				]
			}
		];
	}
})();