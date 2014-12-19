'use strict'

app.filter('dateFromTimestamp', function () {
	return function (str) {
		var date = new Date(str * 1000); // JavaScript works in milliseconds

		return date.toLocaleDateString();
	}
}).filter('timeStamp', function () {
	return function (str) {
		return new Date(str * 1000);
	}
}).filter('prettyDate', function () {
	return function (date) {
		return date.toLocaleDateString();
	}
});