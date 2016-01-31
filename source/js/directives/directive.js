app.directive('classRoute', function($rootScope) {
  return function(scope, elem, attr) {
    var previous = '';
    $rootScope.$on('$routeChangeSuccess', function(event, currentRoute) {
      var route = currentRoute.$$route;
      if(route) {

        var cls = route['class'];

        if(previous) {
          attr.$removeClass(previous);
        }

        if(cls) {
          previous = cls;
          attr.$addClass(cls);
        }
      }
    });
  };

});


app.directive('titleRoute', function($rootScope, $timeout) {
  return function(scope, elem, attr) {
    $rootScope.$on('$routeChangeSuccess', function(event, currentRoute) {
        var title = 'Weather Beer';
         if (currentRoute['title']) title = title+' | '+currentRoute['title'];
         $timeout(function() {  elem.text(title); }, 0, false);
    });
  };

});
