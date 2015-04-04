angular.module('Vincent', [])
    .factory('searchResultService', function () {
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
    });
