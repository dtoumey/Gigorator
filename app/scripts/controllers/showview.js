'use strict'

app.controller('ShowViewCtrl', function ($scope, $routeParams, Show, Auth) {
	$scope.show = Show.get($routeParams.showId);
	$scope.status = (new Date($routeParams.showId * 1000) > new Date()) ? 'UPCOMING' : 'COMPLETE';
	$scope.bands = Show.getBands($routeParams.showId);
	$scope.test = Show.newBand;

	$scope.user = Auth.user;
	$scope.signedIn = Auth.signedIn;
});