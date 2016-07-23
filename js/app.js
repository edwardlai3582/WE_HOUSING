var app = angular.module('MyApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('list', {
        url: '/',
        templateUrl: './views/list.html',
        controller: 'listController',
        resolve: {
            apartmentData : function($http){
                return $http.get('./files/apartment.json').success(function(data) {
                    return data;
                });
            }
        }
    });
    
    $stateProvider.state('detail', {
        url: '/detail/{name}',
        templateUrl: './views/detail.html',
        controller: 'detailController',
        params: {
         apartment: null
       },
    })

    $urlRouterProvider.otherwise('/');
}]);

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});



