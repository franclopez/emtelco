angular.module('emtelco.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('NewIndexCtrl', function($scope, NewService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.news = NewService.all();
})


// A simple controller that shows a tapped item's data
.controller('NewDetailCtrl', function($scope, $stateParams, NewService) {
  // "News" is a service returning mock data (services.js)
  $scope.news = NewService.get($stateParams.newId);
});
