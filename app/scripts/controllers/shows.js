'use strict';

app.controller('ShowsCtrl', function ($scope, $location, Show, Auth) {
  if (!Auth.signedIn()) {
    $location.path('/login');
  }

  $scope.shows = Show.all;
  $scope.user = Auth.user;
  $scope.signedIn = Auth.signedIn;

  $scope.deleteShow = function (show) {
  	Show.delete(show);
  };
});