'use strict';

app.controller('ShowsCtrl', function ($scope, Show, Auth) {
  $scope.shows = Show.all;
  $scope.user = Auth.user;

  $scope.deleteShow = function (show) {
  	Show.delete(show);
  };
});