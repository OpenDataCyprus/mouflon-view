(function(){
	'use strict';

	angular
		.module('MouflonView')
		.controller('NotifyModalController', NotifyModalController);

	NotifyModalController.$inject = ['$scope', '$http', '$uibModalInstance'];

	function NotifyModalController($scope, $http, $uibModalInstance){
		$scope.ok = function () {
			return $http
				.post('/api/notify', $scope.form)
				.then(function(res){
					$uibModalInstance.close(res);
				})
				.catch(function(){
					$uibModalInstance.close();
				});
		};

		$scope.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};
	}
})();


