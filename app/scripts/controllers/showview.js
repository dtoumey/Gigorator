'use strict'
app.controller('ShowViewCtrl', function ($scope, $routeParams, $location, Show, Auth, Band) {
	$scope.show = Show.get($routeParams.showId);
	$scope.status = (new Date($routeParams.showId * 1000) > new Date()) ? 'UPCOMING' : 'COMPLETE';
	$scope.bands = Show.getBands($routeParams.showId);
	$scope.deleteShow = false;

	$scope.delete = function () {
		Show.delete($routeParams.showId);
		$location.path('/');
	};

	$scope.deleteBand = function (band) {
		Show.deleteBand(band, $routeParams.showId)
	};

	$scope.user = Auth.user;
	$scope.signedIn = Auth.signedIn;
});