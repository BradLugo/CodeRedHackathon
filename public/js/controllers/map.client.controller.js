myApp.controller('MapController', function($scope, Authentication) {
	$scope.tagline = 'To the moon and back!';
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
});
