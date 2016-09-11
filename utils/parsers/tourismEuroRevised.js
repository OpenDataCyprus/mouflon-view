'use strict';

const xlsx = require('xlsx');

const PATH = `${__dirname}/../../datasets/TOURISMeurorevisedAugust2016WEB.xlsx`;

function parse(){
	return new Promise((resolve, reject) => {
		var workbook = xlsx.readFile(PATH);

		var touristArrivalsByMonth = workbook.Sheets[workbook.SheetNames[1]];
		var touristArrivalsByCountry = workbook.Sheets[workbook.SheetNames[2]];
		var airportArrivals = workbook.Sheets[workbook.SheetNames[3]];
		var touristExpenditure = workbook.Sheets[workbook.SheetNames[4]];
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

			return parseInt(sum * 2) * 1000;
		})();

		var numberOfTouristsPreviousYear = (function(){
			var sum = 0;

			for(let i=2;i<=13;i++){
				let cell = touristArrivalsByMonth['AA' + i];
				if(cell){
					sum += cell.v;
				}
			}

			return parseInt(sum) * 1000;
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
			var countries = [];
			for(let i=4;i<=20;i++){
				let cell = touristArrivalsByCountry['A' + i];
				countries.push(cell.v.trim());
			}

			return countries.map((country, index) => {
				return {
					country: country,
					value: touristArrivalsByCountry['V' + (index + 4)].v
				}
			});
		})();

		var touristExpenditurePerCapitalCurrentYear = (function(){
			return parseInt(touristExpenditure['Z129'].v);
		})();

		var touristExpenditurePerCapitalPreviousYear = (function(){
			return parseInt(touristExpenditure['Z121'].v);
		})();

		var touristExpenditurePerCapital = (function(){
			let years = [
				{ label: '2012', row: 97},
				{ label: '2013', row: 113},
				{ label: '2014', row: 113}, // TODO: Ask K why the 2 years are the same
				{ label: '2015', row: 121},
				{ label: '2016', row: 129}
			];

			return years.map((year) => {
				let values = [];

				for(let i=67;i<=89;i+=2){
					let cell = touristExpenditure[String.fromCharCode(i) + year.row];
					values.push(!cell ? 0 : cell.v);
				}

				return {
					'year': year.label,
					'values': values
				};
			});
		})();

		var touristExpenditurePerCapitalPercentageOfChange = (function(){
			let years = [
				{ label: '2015 vs 2014', row: 233},
				{ label: '2016 vs 2015', row: 239}
			];
			/**
			 * cat
			 $D.$B$236,
			 $D.$D$236,
			 $D.$F$236,
			 $D.$H$236,$D.$J$236,$D.$L$236,$D.$N$236,$D.$N$236,$D.$P$236,$D.$R$236,$D.$T$236,$D.$V$236,

			 $D.$X$236
			 */
			return years.map((year) => {
				let values = [];

				for(let i=66;i<=88;i+=2){
					let cell = touristExpenditure[String.fromCharCode(i) + year.row];
					values.push({
						month: touristExpenditure[String.fromCharCode(i) + 236].v,
						value: !cell ? 0 : cell.v
					});
				}

				return {
					'year': year.label,
					'values': values
				};
			});
		})();

		var revenueFromTourismByMonthCurrentYear = (function(){
			return parseInt(revenueFromTourismByMonth['AG19'].v * 1000);
		})();

		var revenueFromTourismByMonthPreviousYear = (function(){
			return parseInt(revenueFromTourismByMonth['AE19'].v * 1000);
		})();

		var revenueFromTourismByMonthChart = (function(){
			let years = [
				{ label: '2014', cell: 'AC'},
				{ label: '2015', cell: 'AE'},
				{ label: '2016', cell: 'AG'}
			];

			return years.map((year) => {
				let values = [];

				for(let i=7;i<=18;i++){
					let cell = revenueFromTourismByMonth[year.cell + i];
					values.push(!cell ? 0 : cell.v);
				}

				return {
					'year': year.label,
					'values': values
				};
			});
		})();

		var revenueFromTourismByMontChangeChart = (function(){
			let years = [
				{ label: '2014', cell: 'AT'},
				{ label: '2015', cell: 'AU'},
				{ label: '2016', cell: 'AV'}
			];

			return years.map((year) => {
				let values = [];

				for(let i=7;i<=18;i++){
					let cell = revenueFromTourismByMonth[year.cell + i];
					values.push(!cell ? 0 : cell.v);
				}

				return {
					'year': year.label,
					'values': values
				};
			});
		})();

		var perCapitaRevenueFromTourismByMonthCurrentYear = (function(){
			return parseInt(perCapitaRevenueFromTourismByMonth['AK19'].v * 1000);
		})();

		var perCapitaRevenueFromTourismByMonthPreviousYear = (function(){
			return parseInt(perCapitaRevenueFromTourismByMonth['AI19'].v * 1000);
		})();

		var perCapitaRevenueFromTourismByMonthChart = (function(){
			let years = [
				{ label: '2014', cell: 'AB'},
				{ label: '2015', cell: 'AD'},
				{ label: '2016', cell: 'AF'}
			];

			return years.map((year) => {
				let values = [];

				for(let i=7;i<=18;i++){
					let cell = perCapitaRevenueFromTourismByMonth[year.cell + i];
					values.push(!cell ? 0 : cell.v);
				}

				return {
					'year': year.label,
					'values': values
				};
			});
		})();

		return resolve([
			{
				title: 'Number of tourists current year (projected)',
				data: numberOfTouristsCurrentYear,
				alias: 'numberOfTouristsCurrentYear'
			},
			{
				title: 'Number of tourists previous year',
				data: numberOfTouristsPreviousYear,
				alias: 'numberOfTouristsPreviousYear'
			},
			{
				title: 'Number of tourists (difference)',
				data: (((numberOfTouristsCurrentYear - numberOfTouristsPreviousYear) / numberOfTouristsPreviousYear) * 100).toFixed(2) + '%',
				alias: 'numberOfTouristsDifference'
			},
			{
				title: 'Tourist arrivals by month (1000:1)',
				data: touristArrivalsByMonthChart,
				alias: 'touristArrivalsByMonthChart'
			},
			{
				title: 'Tourist arrivals by month (% of change)',
				data: touristArrivalsByMonthChangeChart,
				alias: 'touristArrivalsByMonthChangeChart'
			},
			{
				title: 'Tourist arrivals by country 2015',
				data: touristArrivalsByCountryChart,
				alias: 'touristArrivalsByCountryChart'
			},
			{
				title: 'Tourist expenditure per capital',
				data: touristExpenditurePerCapital,
				alias: 'touristExpenditurePerCapital'
			},
			{
				title: 'Tourist expenditure per capital current year',
				data: touristExpenditurePerCapitalCurrentYear,
				alias: 'touristExpenditurePerCapitalCurrentYear'
			},
			{
				title: 'Tourist expenditure per capital previous year',
				data: touristExpenditurePerCapitalPreviousYear,
				alias: 'touristExpenditurePerCapitalPreviousYear'
			},
			{
				title: 'Tourist expenditure per capital (difference)',
				data: (((touristExpenditurePerCapitalCurrentYear - touristExpenditurePerCapitalPreviousYear) / touristExpenditurePerCapitalPreviousYear) * 100).toFixed(2) + '%',
				alias: 'numberOfTouristsDifference'
			},
			{
				title: 'Tourist expenditure per capital (% of change)',
				data: touristExpenditurePerCapitalPercentageOfChange,
				alias: 'touristExpenditurePerCapitalPercentageOfChange'
			},
			{
				title: 'Revenue from tourism by month',
				data: revenueFromTourismByMonthChart,
				alias: 'revenueFromTourismByMonthChart'
			},
			{
				title: 'Revenue from tourism by month current year (projected)',
				data: revenueFromTourismByMonthCurrentYear,
				alias: 'revenueFromTourismByMonthCurrentYear'
			},
			{
				title: 'Revenue from tourism by month previous year',
				data: revenueFromTourismByMonthPreviousYear,
				alias: 'revenueFromTourismByMonthPreviousYear'
			},
			{
				title: 'Revenue from tourism by month (difference)',
				data: (((revenueFromTourismByMonthCurrentYear - revenueFromTourismByMonthPreviousYear) / revenueFromTourismByMonthPreviousYear) * 100).toFixed(2) + '%',
				alias: 'numberOfTouristsDifference'
			},
			{
				title: 'Revenue % change from tourism by month',
				data: revenueFromTourismByMontChangeChart,
				alias: 'revenueFromTourismByMontChangeChart'
			},
			{
				title: 'Per capita revenue from tourism by month',
				data: perCapitaRevenueFromTourismByMonthChart,
				alias: 'perCapitaRevenueFromTourismByMonthChart'
			},
			{
				title: 'Per capita revenue from tourism by month current year (projected)',
				data: perCapitaRevenueFromTourismByMonthCurrentYear,
				alias: 'perCapitaRevenueFromTourismByMonthCurrentYear'
			},
			{
				title: 'Per capita revenue from tourism by month previous year',
				data: perCapitaRevenueFromTourismByMonthPreviousYear,
				alias: 'perCapitaRevenueFromTourismByMonthPreviousYear'
			},
			{
				title: 'Per capita revenue from tourism by month (difference)',
				data: (((perCapitaRevenueFromTourismByMonthCurrentYear - perCapitaRevenueFromTourismByMonthPreviousYear) / perCapitaRevenueFromTourismByMonthPreviousYear) * 100).toFixed(2) + '%',
				alias: 'numberOfTouristsDifference'
			}
		]);
	})
}

module.exports = parse;