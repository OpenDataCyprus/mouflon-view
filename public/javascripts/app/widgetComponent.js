(function(){
	'use strict';

	angular
		.module('MouflonView')
		.directive('widgetComponent', widgetComponent);

	widgetComponent.$inject = ['$timeout'];

	function widgetComponent($timeout){
		return {
			restrict: 'E',
			replace: true,
			scope: {
				widget: '=config'
			},
			templateUrl: 'partials/app/widgetComponent.html',
			link: function($scope){
				$timeout(function(){
					$scope.widget.config.getHighcharts().reflow()
				});
			}
		};
	}
})();
