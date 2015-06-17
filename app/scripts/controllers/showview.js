'use strict'
app.controller('ShowViewCtrl', function ($scope, $routeParams, $location, $filter, Show, Auth, Band) {
	$scope.show = Show.get($routeParams.showId);
	$scope.status;
	$scope.bands = Show.getBands($routeParams.showId);
	$scope.deleteShow = false;

	$scope.delete = function () {
		Show.delete($routeParams.showId);
		$location.path('/');
	};

	$scope.removePending = function () {
		Show.removePending($routeParams.showId);
	};

	$scope.pendingStatus = function() {
		var today = new Date();
		var date = new Date($routeParams.showId * 1000);
	    if (date > today) {
	      return 'UPCOMING';
	    } else if (date.toDateString() === today.toDateString()) {
	      return 'TODAY';
	    } else {
	      return 'COMPLETE';
	    }
	};

	$scope.setPending = function () {
		Show.setPending($routeParams.showId);
	};

	$scope.deleteBand = function (band) {
		Show.deleteBand(band, $routeParams.showId)
	};

	$scope.user = Auth.user;
	$scope.signedIn = Auth.signedIn;
});