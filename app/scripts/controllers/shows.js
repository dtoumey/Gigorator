'use strict';

app.controller('ShowsCtrl', function ($scope, $location, $filter, Show, Auth) {
  if (!Auth.signedIn()) {
    $location.path('/login');
  }

  $scope.shows = Show.all;
  $scope.user = Auth.user;
  $scope.signedIn = Auth.signedIn;
  
  $scope.pendingStatus = function(date) {
    var today = new Date();
    date = new Date(date * 1000);
    if (date > today) {
      return 'UPCOMING';
    } else if (date.toDateString() === today.toDateString()) {
      return 'TODAY';
    } else {
      return 'COMPLETE';
    }
  }

  $scope.deleteShow = function (show) {
  	Show.delete(show);
  };
});