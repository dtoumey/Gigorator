'use strict'

app.controller('NavCtrl', function ($scope, $location, $filter, $rootScope, Auth, $firebase, Show) {
  $scope.user = Auth.user;
  $scope.newShow = {venue: '', date: ''};
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;
  $scope.date = $filter('prettyDate')(new Date());
  $rootScope.date = $filter('prettyDate')(new Date());

  $scope.submitShow = function () {
    var id = Show.create($scope.newShow)
		$location.path('/shows/' + id);
		$scope.newShow = {venue: '', date: ''};
  };
});