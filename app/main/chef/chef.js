(function () {
  angular
    .module('HomeMade')
    .controller('chefCtrl', chefCtrl)
  	.directive('chefPartial', chefPartial);

	function chefCtrl ($scope, chefFactory, apiFactory) {
    
		$scope.testMessage = "Im on the chef page!";

	}

	function chefPartial () {
		return {
		  restrict: 'E',
		  templateUrl: 'app/main/chef/chef.html'
		};
	}


})();