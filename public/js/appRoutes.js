angular.module('Vincent', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider.when('/', {
			templateUrl: 'views/map.html',
			controller: function($scope, Authentication) {
				$scope.tagline = 'To the moon and back!';
			    console.log('im in the map controller');
				$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
			}
		})

		.when('/advancedSearch', {
			templateUrl: 'views/advancedSearch.html',
			controller: 'AdvancedSearchController'
		})

		.when('/messageBoard', {
			templateUrl: 'views/messageBoard.html',
			controller: 'MessageBoardController'
		});

	$locationProvider.html5Mode(true);

}]);
