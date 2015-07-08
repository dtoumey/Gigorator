'use strict';

app.factory('Show', function ($firebase, FIREBASE_URL, Priority) {
	var ref = new Firebase(FIREBASE_URL);
	var showsRef = new Firebase(FIREBASE_URL + '/shows');
    var bandRef = new Firebase(FIREBASE_URL + '/bands');
	var shows = $firebase(ref.child('shows')).$asArray();

	var Show = {
		all: shows,
		get: function (showId) {
			return $firebase(ref.child('shows').child(showId)).$asObject();
		},
		setPending: function (showId) {
			showsRef.child(showId).child('pending').set(true);
		},
		removePending: function (showId) {
			showsRef.child(showId).child('pending').set(false);
		},
		getBands: function (showId) {
			return $firebase(ref.child('shows').child(showId).child('bands')).$asArray();
		},
		delete: function (showId) {
			showsRef.child(showId).remove();
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
			var nodeName = band.toLowerCase().replace(/\s/g, '').replace(/\./g, '');
			nodeName = encodeURIComponent(nodeName);

			function setBandCallback(bandPriority) {
				showsRef.child(showId).child('bands').child(nodeName).set({'name': band});
				bandRef.child(nodeName).setWithPriority({ name: band, p: bandPriority }, bandPriority);
			}

			Priority.startPriority(band, setBandCallback);
		},
		deleteBand: function (band, showId) {
			var nodeName = band.toLowerCase().replace(/\s/g, '').replace(/\./g, '');
			showsRef.child(showId).child('bands').child(nodeName).remove();
		}
	};

	return Show;
});