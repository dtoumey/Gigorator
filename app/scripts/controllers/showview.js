'use strict'

app.controller('ShowViewCtrl', function ($scope, $routeParams, Show, Auth) {
	$scope.show = Show.get($routeParams.showId);
	$scope.bands = Show.getBands($routeParams.showId);

	$scope.user = Auth.user;
	$scope.signedIn = Auth.signedIn;
});