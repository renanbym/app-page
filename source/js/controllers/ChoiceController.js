app.controller('ChoiceController', function($scope, $location){



  $scope.locations = [
    {_id: 1, name: "São Paulo", lat: 0, lon: 1},
    {_id: 2, name: "Rio De Janeiro", lat: 2, lon: 3}
  ];


  $scope.send = function() {
    $location.path("/weather");
  }

});
