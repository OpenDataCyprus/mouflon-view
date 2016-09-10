'use strict';

const xlsx = require('xlsx');

const PATH = `${__dirname}/../../datasets/TOURISMeurorevisedAugust2016WEB.xlsx`;

function parse(){
	var workbook = xlsx.readFile(PATH);

	var touristArrivalsByMonth = workbook.Sheets[workbook.SheetNames[1]];
	var touristArrivalsByCountry = workbook.Sheets[workbook.SheetNames[2]];
	var airportArrivals = workbook.Sheets[workbook.SheetNames[3]];
	var touristExpenditude = workbook.Sheets[workbook.SheetNames[4]];
	var revenueFromTourismByMonth = workbook.Sheets[workbook.SheetNames[5]];
	var perCapitaRevenueFromTourismByMonth = workbook.Sheets[workbook.SheetNames[6]];

	var numberOfTouristsCurrentYear = (function(){
		var sum = 0;

		for(let i=2;i<=13;i++){
			let cell = touristArrivalsByMonth['AB' + i];
			if(cell){
				sum += cell.v;
			}
		}

		return sum;
	})();

	var numberOfTouristsPreviousYear = (function(){
		var sum = 0;

		for(let i=2;i<=13;i++){
			let cell = touristArrivalsByMonth['AA' + i];
			if(cell){
				sum += cell.v;
			}
		}

		return sum;
	})();

	var touristArrivalsByMonthChart = (function(){
		let years = [
			{ label: '2010', cell: 'V'},
			{ label: '2011', cell: 'X'},
			{ label: '2012', cell: 'Y'},
			{ label: '2013', cell: 'Z'},
			{ label: '2014', cell: 'V'},
			{ label: '2015', cell: 'AA'},
			{ label: '2016', cell: 'AB'}
		];

		return years.map((year) => {
			let values = [];

			for(let i=2;i<=13;i++){
				let cell = touristArrivalsByMonth[year.cell + i];
				values.push(!cell ? 0 : cell.v);
			}

			return {
				'year': year.label,
				'values': values
			};
		});
	})();

	var touristArrivalsByMonthChangeChart = (function(){
		let years = [
			{ label: '2012 vs 2011', cell: 'AE'},
			{ label: '2013 vs 2012', cell: 'AF'},
			{ label: '2014 vs 2013', cell: 'AG'},
			{ label: '2015 vs 2014', cell: 'AH'},
			{ label: '2016 vs 2015', cell: 'AI'}
		];

		return years.map((year) => {
			let values = [];

			for(let i=2;i<=13;i++){
				let cell = touristArrivalsByMonth[year.cell + i];
				values.push(!cell ? 0 : cell.v);
			}

			return {
				'label': year.label,
				'values': values
			};
		});
	})();

	var touristArrivalsByCountryChart = (function(){
		let years = [
			{ label: '2012 vs 2011', cell: 'AE'},
			{ label: '2013 vs 2012', cell: 'AF'},
			{ label: '2014 vs 2013', cell: 'AG'},
			{ label: '2015 vs 2014', cell: 'AH'},
			{ label: '2016 vs 2015', cell: 'AI'}
		];

		return years.map((year) => {
			let values = [];

			for(let i=2;i<=13;i++){
				let cell = touristArrivalsByMonth[year.cell + i];
				values.push(!cell ? 0 : cell.v);
			}

			return {
				'label': year.label,
				'values': values
			};
		});
	})();

	return [
		{
			title: 'Number of tourists current year (projected)',
			data: numberOfTouristsCurrentYear
		},
		{
			title: 'Number of tourists previous year',
			data: numberOfTouristsPreviousYear
		},
		{
			title: 'Tourist arrivals by month (1000:1)',
			data: touristArrivalsByMonthChart
		},
		{
			title: 'Tourist arrivals by month (% of change)',
			data: touristArrivalsByMonthChangeChart
		},
		{
			title: 'Tourist arrivals by country',
			data: touristArrivalsByCountryChart
		}
	]
}

console.log(JSON.stringify(parse()));

//module.exports = parse;