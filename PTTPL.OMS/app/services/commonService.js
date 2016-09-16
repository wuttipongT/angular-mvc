
'use strict';
app.factory('commonDateTime', [function () {

    var modules = {};
    modules.DateTime = {};

    modules.toString = function (date) {
        
        try {


            var d = date;

            var year = d.substr(0, 4);
            var month = d.substr(4, 2);
            var day = d.substr(6, 2);

            return day + "/" + FormatNumberLength(month, 2) + "/" + year;

        } catch (e) {
            return "-";
        }
    }
    modules.toDateTimeString = function (date) {
        //var d = moment(date);
        //var yyyy = d.year();
        //var mm = d.month() + 1;
        //var dd = d.date();

        //return dd + "-" + FormatNumberLength(mm, 2) + "-" + yyyy;
        try {


            var d = date;

            var year = d.substr(0, 4);
            var month = d.substr(4, 2);
            var day = d.substr(6, 2);
            var h = "00";
            var m = "00";

            if (d.length > 10) {
                h = d.substr(8, 2);
                m = d.substr(10, 2);
            }

            return day + "/" + FormatNumberLength(month, 2) + "/" + year + ' ' + h + ":" + m;

        } catch (e) {
            return "-";
        }
    }
    modules.Now = function () {
        // var dd = new Date();
        // var d = dd.toUTCString();

        // var now = moment();
        return moment().format("YYYYMMDD");
        // var yyyy = d.year();
        // var mm = d.month() + 1;
        // var dd = d.date();

        // return dd + "-" + FormatNumberLength(mm, 2) + "-" + yyyy;

    }
    modules.toDate = function (date) {
        var d = moment(date);
        return d;
    }

    modules.DateTime.getNowString = function () {
        var d = new Date();
        var n = d.toUTCString();
        return n;
    }
    return modules;

    function FormatNumberLength(num, length) {
        var r = "" + num;
        while (r.length < length) {
            r = "0" + r;
        }
        return r;
    }
}]);


app.factory('commonService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var commonServiceFactory = {};

    var _getNumberThai = function (number) {

        if (number == null) return number;
        var newText = '';
        for (var i = 0; i < number.toString().length; i++) {
            var _number = number.toString().substr(i, 1);

            if (_number == '0') newText += '๐';
            else if (_number == '0') newText += '๐';
            else if (_number == '1') newText += '๑';
            else if (_number == '2') newText += '๒';
            else if (_number == '3') newText += '๓';
            else if (_number == '4') newText += '๔';
            else if (_number == '5') newText += '๕';
            else if (_number == '6') newText += '๖';
            else if (_number == '7') newText += '๗';
            else if (_number == '8') newText += '๘';
            else if (_number == '9') newText += '๙';
            else newText += _number;
        }
        return newText;

    };
    var _getMonthThai = function (month) {

        switch (month) {

            case 1: return "มกราคม";
            case 2: return "กุมภาพันธ์";
            case 3: return "มีนาคม";
            case 4: return "เมษายน";
            case 5: return "พฤษภาคม";
            case 6: return "มิถุนายน";
            case 7: return "กรกฎาคม";
            case 8: return "สิงหาคม";
            case 9: return "กันยนายน";
            case 10: return "ตุลาคม";
            case 11: return "พฤศจิกายน";
            case 12: return "ธันวาคม";
        }



    };

    // SameBusiness
    var _getUrlFormService = function (url) {
        var _url = url;
        _url = ngAuthSettings.WebService + '+' + url;
        _url = _url.replace('/\+\/', '/');
        return _url;
    }

    var _initProfile = function (profileName, profileType, profilePath) {
        return {
            file: [
                {
                    name: profileName,//ไม่จำเป็นต้องใส่ก็ได้
                    type: profileType,//ไม่จำเป็นต้องใส่ก็ได้
                }
            ],
            result: _getUrlFormService(profilePath),
            //result: profilePath,
        };
    }

    // Date Converter
    var _dateConverter = function (strDate) {
        var res;

        var arr = strDate.split(" ");
        var arrDate = arr[0].split("/");

        var year = parseInt(arrDate[0]);
        var month = parseInt(arrDate[1]) - 1;
        var day = parseInt(arrDate[2]);

        res = new Date(year, month, day);

        return res;

    }
    var _dateConverterStr = function (strDate) {
        var res;

        var arr = strDate.split(" ");
        var arrDate = arr[0].split("/");

        var year = parseInt(arrDate[0]);
        var month = parseInt(arrDate[1]) - 1;
        var day = parseInt(arrDate[2]);

        res = day + "/" + month + "/" + year;

        return res;

    }
    // UUID Generate
    var _generateUUID = function () {

        var d = new Date().getTime();

        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });

        return uuid;
    }

    // Check Expressions
    var _checkThaiExpressions = function (value) {

        var letters = /^[ก-๙0-9._ ]*$/;

        return (value) ? letters.test(value) : false;
    }
    var _checkEngExpressions = function (value) {

        var letters = /^[a-zA-Z0-9._ ]*$/;

        return (value) ? letters.test(value) : false;
    }
    var _checkZipcodeExpressions = function (value) {

        var zipcode = /^\d{5}$/;

        return (value) ? zipcode.test(value) : false;
    }
    var _chectTelephoneExpressions = function (value) {

        var tel = /^\d{9}$/;

        return (value) ? tel.test(value) : false;
    }

    // Check Validate
    // coords are in lat and long
    var _filterInt = function (value) {
        if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
            return Number(value);
        return NaN;
    }
   
    var _guid = function () {

        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
        }
        var a = s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();


        return a;
    }

    var _percent = function (value, percent) {
        var _value = (parseFloat(value) * parseFloat(percent)) / 100;
        return _value;
    }

    commonServiceFactory.Match = {
        percent: function (value, percent) {
            var _value = (parseFloat(value) * parseFloat(percent)) / 100;
            return _value;
        }
    }

    commonServiceFactory.math = {
        Percentage: function (total, percent) {
            return (parseFloat(total) * percent) / 100;
        },
        IsFloat: function (value) {
            try {
                var t = parseFloat(value);
                if (isNaN(t)) {
                    return null;
                }

                return t;
            } catch (e) {
                return null;
            }
        },
        IsNumber: function (value) {
            try {
                var t = parseFloat(value);
                if (isNaN(t))
                    return false;
                else
                    return true;
            } catch (e) {
                return false;
            }
        }
    };

    commonServiceFactory.string = {
        // String Method
        HasValue: function (item) {

            if (item == undefined)
                return false;
            if (item == "")
                return false;
            if (item == null)
                return false;
            return true;
        },
        IsNullOrEmpty: function (item) {
            if (item == undefined)
                return true;
            if (item == "")
                return true;
            if (item == null)
                return true;
            return false;
        },

    };

    commonServiceFactory.style = {
        Multiple: function (params) {

            var obj = {};
            angular.forEach(params, function (value, key) {
                angular.forEach(value, function (item, key) {
                    obj[key] = item;
                });

            });

            return obj;
        }
    };

    commonServiceFactory.objects = {
        IsObject: function (values) {
            if (angular.isObject(values))
                return true;
            else
                return false;
        },
        IsArray: function (values) {
            if (angular.isArray(values))
                return true;
            else
                return false;
        }

    }

    // public
    commonServiceFactory.getNumberThai = _getNumberThai;
    commonServiceFactory.getMonthThai = _getMonthThai;
    commonServiceFactory.getUrlPath = _getUrlFormService;
    commonServiceFactory.initProfile = _initProfile;
    commonServiceFactory.dateConverter = _dateConverter;
    commonServiceFactory.dateConverterStr = _dateConverterStr
    commonServiceFactory.generateUUID = _generateUUID;
    commonServiceFactory.checkThaiExpressions = _checkThaiExpressions;
    commonServiceFactory.checkEngExpressions = _checkEngExpressions;
    commonServiceFactory.checkZipcodeExpressions = _checkZipcodeExpressions;
    commonServiceFactory.chectTelephoneExpressions = _chectTelephoneExpressions;
    commonServiceFactory.filterInt = _filterInt;
    
    commonServiceFactory.guid = _guid;
    commonServiceFactory.percent = _percent;

    return commonServiceFactory;

}]);

