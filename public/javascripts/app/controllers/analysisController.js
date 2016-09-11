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

		Data.data[0].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[1].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[2].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[3].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[4].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[5].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[6].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[7].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[8].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[9].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[10].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[11].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[12].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[13].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[14].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';
		Data.data[15].description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt doloremque enim itaque maiores mollitia placeat quidem soluta suscipit? Adipisci corporis dolore error labore modi obcaecati repellat sunt tenetur totam!';

		$scope.charts = Data.data.map(function(item , index){
			item.size = 6;

			return item;
		});
	}
})();
