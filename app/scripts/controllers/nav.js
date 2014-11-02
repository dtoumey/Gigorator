'use strict'

app.controller('NavCtrl', function ($scope, $location, Post, Auth, $firebase) {
  $scope.user = Auth.user;
  $scope.post = {url: 'http://', title: ''};
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;

  $scope.submitPost = function () {
  	$scope.post.creator = $scope.user.profile.username;
  	$scope.post.creatorUID = $scope.user.uid;
  	Post.create($scope.post).then(function (ref) {
  		$location.path('/posts/' + ref.name());
  		$scope.post = {url: 'http://', title: ''};
  	});
  };
});