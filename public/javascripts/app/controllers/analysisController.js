(function(){
	'use strict';

	angular
		.module('MouflonView')
		.controller('AnalysisController', AnalysisController);

	AnalysisController.$inject = ['$scope', '$log', 'Data'];

	function AnalysisController($scope, $log, Data){
		$log.debug(Data);

		$scope.charts = Data.map(function(item){

			return item;
		});
	}
})();
