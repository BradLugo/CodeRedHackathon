var myApp = angular.module('Vincent', ['ngRoute','uiGmapgoogle-maps']).config(
    ['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            china: true
        });
    }]
).factory('searchResultService', function () {
    var peopleResponse = { };

    return {
        savesearchResponse:function (data) {
            peopleResponse = data;
            console.log(data);
        },
        getSearchResponse:function () {
            return peopleResponse;
        }
    };
}).controller('AdvancedSearchController', function($scope) {

}).controller('HomeController', function($scope) {
    $scope.tagline = 'To the moon and back!';
    console.log('im in the map controller');
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
}).controller('MessageBoardController', function($scope) {

});
