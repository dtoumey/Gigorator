'use strict';

app.controller('BandsAutoCompleteCtrl', function ($scope, Band, Auth, Priority, Show) {
  $scope.bands = [];
  $scope.user = Auth.user;
  $scope.test = Priority.startPriority;

  $scope.set = function (name) {
    $scope.find = name;
    Show.newBand = name;
    $scope.bands = [];
  };
  $scope.search = function () {
  	var band = $scope.find;
  	var bandStartPriority = Priority.startPriority(band);
  	var bandEndPriority = Priority.endPriority(band);

  	function setBands(data) {
  		bandEndPriority = data;
  	  $scope.bands = Band.findBands(bandStartPriority, bandEndPriority);
  	}
  	function getEndPriority(data) {
  		bandStartPriority = data;
  		Priority.endPriority(band, setBands);
  	}
  	Priority.startPriority(band, getEndPriority);
  };
});

