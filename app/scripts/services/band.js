'use strict';

app.factory('Band', function ($firebase, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var bands = $firebase(ref.child('bands')).$asArray();

	var Band = {
		all: bands,
		// create: function (band) {
		// 	return bands.$add(band).then(function(bandRef) {
		// 		  $firebase(ref.child('user_bands').child(band.creatorUID))
		// 		                    .$push(bandRef.name());
		// 		  return bandRef;
		// 	});
		// },
		get: function (bandId) {
			return $firebase(ref.child('bands').child(bandId)).$asObject();
		},
		findBands: function (start, end) {
			return $firebase(ref.child('bands').startAt(start).endAt(end)).$asObject();
		},
		delete: function (band) {
			return bands.$remove(band);
		}
	};

	return Band;
});