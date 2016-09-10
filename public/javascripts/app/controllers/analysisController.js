(function(){
	'use strict';

	angular
		.module('MouflonView')
		.controller('AnalysisController', AnalysisController);

	AnalysisController.$inject = ['$scope', '$log', 'Data'];

	function AnalysisController($scope, $log, Data){
		var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

		$log.debug(Data);

		Data.data[0].config = undefined;
		Data.data[1].config = undefined;
		Data.data[2].config = {
			options: {
				chart: { type: 'column' },
				xAxis: { categories: MONTHS }
			},
			series: Data.data[2].data.map(function(el){
				return {
					name: el.year,
					data: el.values
				};
			}),
			title: { text: '' }
		};

		//Data.data[3].config = {
		//	options: {
		//		xAxis: [{ categories: extractData0('name') }],
		//			yAxis: [
		//			{
		//				labels: {
		//					style: {
		//						color: '#89A54E'
		//					}
		//				},
		//				title: {
		//					text: 'Efficiency',
		//					style: {
		//						color: '#89A54E'
		//					}
		//				},
		//				opposite: true
		//
		//			},
		//			{
		//				gridLineWidth: 0,
		//				title: {
		//					text: 'Efficient Notifications',
		//					style: {
		//						color: '#4572A7'
		//					}
		//				},
		//				labels: {
		//					style: {
		//						color: '#4572A7'
		//					}
		//				}
		//
		//			},
		//			{
		//				gridLineWidth: 0,
		//				title: {
		//					text: 'Push Notifications',
		//					style: {
		//						color: '#AA4643'
		//					}
		//				},
		//				labels: {
		//					style: {
		//						color: '#AA4643'
		//					}
		//				}
		//			}
		//		],
		//			tooltip: {
		//			shared: true
		//		}
		//	},
		//	series: [
		//		{ name: 'Push Notifications', 		color: '#4572A7', type: 'column', data: extractData0('pushNotifications'), 		yAxis: 2 },
		//		{ name: 'Efficient Notifications', 	color: '#AA4643', type: 'column', data: extractData0('efficientNotifications'), yAxis: 1 },
		//		{ name: 'Efficiency', 				color: '#89A54E', type: 'spline', data: extractData0('efficiency'), 			tooltip: { valueSuffix: ' %' } }
		//	],
		//		title: {
		//	text: ''
		//}


		$scope.charts = Data.data.map(function(item , index){
			item.size = 6;

			return item;
		});
	}
})();
