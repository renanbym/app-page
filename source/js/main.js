'use strict';

var app = angular.module('weather-beer', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider.when('/change', {
    templateUrl: 'views/choice.html',
    controller: 'ChoiceController',
    class: 'choice',
    title: 'Choice'
  }).when('/weather', {
    templateUrl: 'views/weather.html',
    controller: 'WeatherController',
    class: 'weather',
    title: 'Weather'
  })

  $routeProvider.otherwise({redirectTo: '/change'});
});
