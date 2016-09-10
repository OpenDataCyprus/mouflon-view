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
			templateUrl: 'partials/app/home.html',
			controller: 'HomeController'
		});

		sp.state('analysis', {
			url: '/analysis',
			templateUrl: 'partials/app/analysis.html',
			controller: 'AnalysisController',
			resolve: {
				Data: ['$http', function($http){
					// TODO: Change static string to args from ui-sref when more categories are implemented
					return $http.get('/api/charts?country=CYP&category=tourism');
				}]
			}
		});

		$urlRouterProvider.otherwise('/');

		$logProvider.debugEnabled(true);
		$compileProvider.debugInfoEnabled(true);
	}
})();

