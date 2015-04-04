angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/map', {
			templateUrl: 'views/map.html',
			controller: 'MapController'
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
