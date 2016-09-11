(function(){
	'use strict';

	angular
		.module('MouflonView')
		.run(run);

	run.$inject = ['$rootScope', '$window', '$timeout', '$uibModal'];

	function run($rootScope, $window, $timeout, $uibModal) {
		$rootScope.alerts = [];

		$rootScope.notifyMe = notifyMe;

		$rootScope.$on('$stateChangeSuccess', onStateChangeSuccess);

		function notifyMe(){
			$uibModal
				.open({
					ariaLabelledBy: 'modal-title',
					ariaDescribedBy: 'modal-body',
					templateUrl: 'partials/app/notify-modal.html',
					controller: 'NotifyModalController'
				})
				.result
				.then(function(res){
					if(res){
						$timeout(function(){
							$rootScope.alerts.push({
								type: 'success',
								msg: 'Well done! You successfully subscribed to our Notifier'
							});
						}, 1000);
					}
					else{
						$timeout(function(){
							$rootScope.alerts.push({
								type: 'danger',
								msg: 'Oh snap! Something went wrong submiting your request'
							});
						}, 1000);
					}

					$timeout(function(){
						$rootScope.alerts = [];
					}, 5000);
				});
		}

		function onStateChangeSuccess() {
			document.body.scrollTop = $window.document.documentElement.scrollTop = 0;
		}
	}
})();
