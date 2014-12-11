'use strict';

app.factory('Show', function ($firebase, FIREBASE_URL, Priority) {
	var ref = new Firebase(FIREBASE_URL);
	var showsRef = new Firebase(FIREBASE_URL + '/shows');
	var shows = $firebase(ref.child('shows')).$asArray();

	var Show = {
		all: shows,
		newBand: '',
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
			return $firebase(ref.child('shows').child(showId).child('bands')).$asArray();
		},
		delete: function (show) {
			return shows.$remove(show);
		},
		create: function (newShow) {
			var date = (new Date(newShow.date).valueOf() / 1000).toString();
			showsRef.child(date).setWithPriority({
				venue: newShow.venue,
				date: date
				}, -date);
			return date;
		},
		addBand: function (band, showId) {
  			var bandPriority = Priority.startPriority(band);
  			var nodeName = band.toLowerCase().replace(/\s/g, "").replace(/\./g, '');
  			nodeName = encodeURIComponent(nodeName);

			bandRef.child(showId).child("bands").child(nodeName).set({"name": displayName});
		},
		test: function () {
			console.log('test');
		}
	};

	return Show;
});