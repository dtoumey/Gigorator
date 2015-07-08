'use strict'

app.filter('dateFromTimestamp', function () {
	return function (str) {
		var date = new Date(str * 1000); // JavaScript works in milliseconds

		return date.toLocaleDateString();
	}
}).filter('dayFromTimestamp', function () {
	return function (str) {
		var date = new Date(str * 1000);
		var day;
		switch(date.getDay()) {
			case 0:
				day = 'SUN';
				break;
			case 1:
				day = 'MON';
				break;
			case 2:
				day = 'TUE';
				break;
			case 3:
				day = 'WED';
				break;
			case 4:
				day = 'THU';
				break;
			case 5:
				day = 'FRI';
				break;
			case 6:
				day = 'SAT';
				break;
		}

		return day;
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