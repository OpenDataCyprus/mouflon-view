(function(){
	'use strict';

	angular
		.module('MouflonView')
		.controller('AnalysisController', AnalysisController);

	AnalysisController.$inject = ['$scope', '$log', 'Data'];

	function AnalysisController($scope, $log, Data){
		$log.debug(Data);

		$scope.charts = Data.data.map(function(item){
			item.size = 6;

			item.config = {
				options: {
					chart: {
						type: 'bar'
					},
					xAxis: {
						categories: ['a','b']
					}
				},
				series: [
					{
						name: 'Efficient Notifications from Sales',
						data: [1,2]
					}
				],
				title: {
					text: ''
				}
			};


			return item;
		});
	}
})();
