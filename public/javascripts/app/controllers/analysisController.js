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
					data: el.values.filter(function(el){
						return el;
					})
				};
			}),
			title: { text: '' }
		};
		Data.data[3].config = {
			options: {
				chart: { type: 'line' },
				xAxis: { categories: MONTHS }
			},
			series: Data.data[2].data.map(function(el){
				return {
					name: el.year,
					data: el.values.filter(function(el){
						return el;
					})
				};
			}),
			title: { text: '' }
		};
		Data.data[4].config = {
			options: {
				chart: { type: 'pie' },
				xAxis: { categories: MONTHS }
			},
			series: Data.data[2].data.map(function(el){
				return {
					name: el.year,
					data: el.values.filter(function(el){
						return el;
					})
				};
			}),
			title: { text: '' }
		};
		Data.data[5].config = undefined;
		Data.data[6].config = undefined;
		Data.data[7].config = {
			options: {
				chart: { type: 'line' },
				xAxis: { categories: MONTHS }
			},
			series: Data.data[2].data.map(function(el){
				return {
					name: el.year,
					data: el.values.filter(function(el){
						return el;
					})
				};
			}),
			title: { text: '' }
		};
		Data.data[8].config = {
			options: {
				chart: { type: 'line' },
				xAxis: { categories: MONTHS }
			},
			series: Data.data[2].data.map(function(el){
				return {
					name: el.year,
					data: el.values.filter(function(el){
						return el;
					})
				};
			}),
			title: { text: '' }
		};
		Data.data[9].config = undefined;
		Data.data[10].config = undefined;
		Data.data[11].config = {
			options: {
				chart: { type: 'line' },
				xAxis: { categories: MONTHS }
			},
			series: Data.data[2].data.map(function(el){
				return {
					name: el.year,
					data: el.values.filter(function(el){
						return el;
					})
				};
			}),
			title: { text: '' }
		};
		Data.data[12].config = {
			options: {
				chart: { type: 'line' },
				xAxis: { categories: MONTHS }
			},
			series: Data.data[2].data.map(function(el){
				return {
					name: el.year,
					data: el.values.filter(function(el){
						return el;
					})
				};
			}),
			title: { text: '' }
		};
		Data.data[13].config = undefined;
		Data.data[14].config = undefined;
		Data.data[15].config = {
			options: {
				chart: { type: 'line' },
				xAxis: { categories: MONTHS }
			},
			series: Data.data[2].data.map(function(el){
				return {
					name: el.year,
					data: el.values.filter(function(el){
						return el;
					})
				};
			}),
			title: { text: '' }
		};

		$scope.charts = Data.data.map(function(item , index){
			item.size = 6;

			return item;
		});
	}
})();
