(function(){
	'use strict';

	angular
		.module('MouflonView')
		.run(run);

	run.$inject = ['$rootScope', '$window'];

	function run($rootScope, $window) {
		$rootScope.$on('$stateChangeSuccess', function() {
			document.body.scrollTop = $window.document.documentElement.scrollTop = 0;
		});
	}
})();
