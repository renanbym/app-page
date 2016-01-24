angular.module('weather-beer', ['ngRoute']).config(function($routeProvider){

  $routeProvider.when('/change', {
    templateUrl: 'views/change.html',
    controller: 'WeatherController'
  });

  $routeProvider.otherwise({redirectTo: '/change'});

});
