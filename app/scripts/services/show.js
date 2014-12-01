'use strict';

app.factory('Show', function ($firebase, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var shows = $firebase(ref.child('shows')).$asArray();

	var Show = {
		all: shows,
		// create: function (show) {
		// 	return shows.$add(show).then(function(showRef) {
		// 		  $firebase(ref.child('user_shows').child(show.creatorUID))
		// 		                    .$push(showRef.name());
		// 		  return showRef;
		// 	});
		// },
		get: function (showId) {
			return $firebase(ref.child('shows').child(showId)).$asObject();
		},
		getBands: function (showId) {
			return $firebase(ref.child('shows').child(showId).child('bands')).$asObject();
		},
		delete: function (show) {
			return shows.$remove(show);
		}
	};

	return Show;
});