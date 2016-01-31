'use strict';

var app = angular.module('weather-beer', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider.when('/change', {
    templateUrl: 'views/change.html',
    controller: 'ChoiceController',
    class: 'choice'
  }).when('/weather', {
    templateUrl: 'views/weather.html',
    controller: 'WeatherController',
    class: 'weather'
  })

  $routeProvider.otherwise({redirectTo: '/change'});
});
