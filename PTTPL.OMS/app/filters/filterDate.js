// commonDateTime

'use strict';
app.filter('dateFormate', function (commonDateTime) {
    return function (obj) {
        try {
            if (obj) {
                return commonDateTime.toString(obj);
            } else {
                return '-';
            }
        } catch (e) {
            return '-';
        }
    };
});

app.filter('dateTimeFormate', function (commonDateTime) {
    return function (obj) {
        try {
            if (obj) {

                return commonDateTime.toDateTimeString(obj);
            } else {
                return '-';
            }
        } catch (e) {
            return '-';
        }
    };
});


