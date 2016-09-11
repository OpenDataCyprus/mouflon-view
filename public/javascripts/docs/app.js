(function(){
	'use strict';

	angular
		.module('MouflonView', [])
		.controller('HomeController', HomeController);

	function HomeController(){
		var vm = this;

		vm.categories = [
			{
				title: 'Tourism',
				endpoints: [
					{ type: 'GET', description: 'Number of tourists current year (projected)', 							url: '/api/raw/tourism?q=numberOfTouristsCurrentYear' },
					{ type: 'GET', description: 'Number of tourists previous year (projected)', 						url: '/api/raw/tourism?q=numberOfTouristsPreviousYear' },
					{ type: 'GET', description: 'Tourist arrivals by month (1000:1)', 									url: '/api/raw/tourism?q=touristArrivalsByMonthChart' },
					{ type: 'GET', description: 'Tourist arrivals by month (% of change)', 								url: '/api/raw/tourism?q=touristArrivalsByMonthChangeChart' },
					{ type: 'GET', description: 'Tourist arrivals by country 2015', 									url: '/api/raw/tourism?q=touristArrivalsByCountryChart' },
					{ type: 'GET', description: 'Tourist expenditure per capital current year', 						url: '/api/raw/tourism?q=touristExpenditurePerCapitalCurrentYear' },
					{ type: 'GET', description: 'Tourist expenditure per capital previous year', 						url: '/api/raw/tourism?q=touristExpenditurePerCapitalPreviousYear' },
					{ type: 'GET', description: 'Tourist expenditure per capital', 										url: '/api/raw/tourism?q=touristExpenditurePerCapital' },
					{ type: 'GET', description: 'Tourist expenditure per capital (% of change)', 						url: '/api/raw/tourism?q=touristExpenditurePerCapitalPercentageOfChange' },
					{ type: 'GET', description: 'Revenue from tourism by month current year (projected)', 				url: '/api/raw/tourism?q=revenueFromTourismByMonthCurrentYear' },
					{ type: 'GET', description: 'Revenue from tourism by month previous year', 							url: '/api/raw/tourism?q=revenueFromTourismByMonthPreviousYear' },
					{ type: 'GET', description: 'Revenue from tourism by month', 										url: '/api/raw/tourism?q=revenueFromTourismByMonthChart' },
					{ type: 'GET', description: 'Revenue % change from tourism by month', 								url: '/api/raw/tourism?q=revenueFromTourismByMontChangeChart' },
					{ type: 'GET', description: 'Per capita revenue from tourism by month current year (projected)', 	url: '/api/raw/tourism?q=perCapitaRevenueFromTourismByMonthCurrentYear' },
					{ type: 'GET', description: 'Per capita revenue from tourism by month previous year',			 	url: '/api/raw/tourism?q=perCapitaRevenueFromTourismByMonthPreviousYear' },
					{ type: 'GET', description: 'Per capita revenue from tourism by month', 							url: '/api/raw/tourism?q=perCapitaRevenueFromTourismByMonthChart' },
				]
			}
		];
	}
})();