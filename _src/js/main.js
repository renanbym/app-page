angular.module('wheater-beer', ['ngRoute', 'ngResource'])
.config(function($routeProvider){

  $routeProvider.when('/lista', {
    templateUrl: 'views/list-times.html',
    controller: 'TimeController'
  });

  $routeProvider.otherwise({redirectTo: '/lista'});

});
