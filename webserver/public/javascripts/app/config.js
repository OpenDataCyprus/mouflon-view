(function(){
	'use strict';

	angular
		.module('MouflonView')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider', '$logProvider', '$compileProvider'];

	function config($stateProvider, $urlRouterProvider, $logProvider, $compileProvider) {
		/**
		 * Routes Configuration
		 */
		var sp = $stateProvider;

		sp.state('home', {
			url: '/',
			title: 'Home',
			templateUrl: 'partials/app/home.html',
			controller: 'HomeController'
		});

		$urlRouterProvider.otherwise('/');

		$logProvider.debugEnabled(true);
		$compileProvider.debugInfoEnabled(true);
	}
})();
