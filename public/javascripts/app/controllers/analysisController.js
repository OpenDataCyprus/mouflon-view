(function(){
	'use strict';

	angular
		.module('MouflonView')
		.controller('AnalysisController', AnalysisController);

	AnalysisController.$inject = ['$scope', '$log', 'Data'];

	function AnalysisController($scope, $log, Data){
		var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

		$log.debug(Data);

		// TODO: Implement another layer above the cacher to enrich the data per different app with chart and description
		try{ Data.data[0].config = undefined; } catch(e){}
		try{ Data.data[1].config = undefined; } catch(e){}
		try{ Data.data[2].config = undefined; } catch(e){}
		try{
			Data.data[3].config = {
				options: {
					chart: { type: 'column' },
					xAxis: { categories: MONTHS }
				},
				series: Data.data[3].data.map(function(el){
					return {
						name: el.year,
						data: el.values.filter(function(el){
							return el;
						})
					};
				}),
				title: { text: '' }
			};
		}
		catch(e){}
		try{
			Data.data[4].config = {
				options: {
					chart: { type: 'line' },
					xAxis: { categories: MONTHS }
				},
				series: Data.data[4].data.map(function(el){
					return {
						name: el.year,
						data: el.values.filter(function(el){
							return el;
						})
					};
				}),
				title: { text: '' }
			};
		}
		catch(e){}
		try{
			Data.data[5].config = {
				options: {
					chart: { type: 'pie' }
				},
				series: [
					{
						name: 'Country',
						data: Data.data[5].data.map(function(el){
							return {
								name: el.country,
								y: el.value
							};
						})
					}
				],
				title: { text: '' }
			};
		}
		catch(e){}
		try{ Data.data[6].config = undefined; } catch(e){}
		try{ Data.data[7].config = undefined; } catch(e){}
		try{ Data.data[8].config = undefined; } catch(e){}
		try{
			Data.data[9].config = {
				options: {
					chart: { type: 'line' },
					xAxis: { categories: MONTHS }
				},
				series: Data.data[9].data.map(function(el){
					return {
						name: el.year,
						data: el.values.filter(function(el){
							return el;
						})
					};
				}),
				title: { text: '' }
			};
		}
		catch(e){}
		try{
			Data.data[10].config = {
				options: {
					chart: { type: 'line' },
					xAxis: { categories: MONTHS }
				},
				series: Data.data[3].data.map(function(el){
					return {
						name: el.year,
						data: el.values.filter(function(el){
							return el;
						})
					};
				}),
				title: { text: '' }
			};
		}
		catch(e){}
		try{
			Data.data[11].config = {
				options: {
					chart: { type: 'line' },
					xAxis: { categories: MONTHS }
				},
				series: Data.data[11].data.map(function(el){
					return {
						name: el.year,
						data: el.values.filter(function(el){
							return el;
						})
					};
				}),
				title: { text: '' }
			};
		}
		catch(e){}
		try{ Data.data[12].config = undefined; } catch(e){}
		try{ Data.data[13].config = undefined; } catch(e){}
		try{ Data.data[14].config = undefined; } catch(e){}
		try{
			Data.data[15].config = {
				options: {
					chart: { type: 'line' },
					xAxis: { categories: MONTHS }
				},
				series: Data.data[15].data.map(function(el){
					return {
						name: el.year,
						data: el.values.filter(function(el){
							return el;
						})
					};
				}),
				title: { text: '' }
			};
		}
		catch(e){}
		try{
			Data.data[16].config = {
				options: {
					chart: { type: 'line' },
					xAxis: { categories: MONTHS }
				},
				series: Data.data[16].data.map(function(el){
					return {
						name: el.year,
						data: el.values.filter(function(el){
							return el;
						})
					};
				}),
				title: { text: '' }
			};
		}
		catch(e){}
		try{
			Data.data[17].config = {
				options: {
					chart: { type: 'line' },
					xAxis: { categories: MONTHS }
				},
				series: Data.data[17].data.map(function(el){
					return {
						name: el.year,
						data: el.values.filter(function(el){
							return el;
						})
					};
				}),
				title: { text: '' }
			};
		}
		catch(e){}
		try{ Data.data[18].config = undefined; } catch(e){}
		try{ Data.data[19].config = undefined; } catch(e){}
		try{ Data.data[20].config = undefined; } catch(e){}

		$scope.chartsArrivals = [];
		$scope.chartsExpenditure = [];
		Data.data.forEach(function(item , index){
			item.size = item.config ? 6 : 4;

			if([9,10,11,17].indexOf(index) !== -1){
				item.size = 12;
			}

			if(index < 6){
				$scope.chartsArrivals.push(item);
			}

			else{
				$scope.chartsExpenditure.push(item);
			}
		});
	}
})();
