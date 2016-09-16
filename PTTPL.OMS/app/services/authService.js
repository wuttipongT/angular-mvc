'use strict';

// refence : www.codeproject.com/Articles/784106/AngularJS-Token-Authentication-using-ASP-NET-Web-A

app.factory('authService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', '$state',
    function ($http, $q, localStorageService, ngAuthSettings, $state) {
    
    var serviceBase = ngAuthSettings.WebService;
    var authServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName: "",
        useRefreshTokens: false,
        roleId: ""
    };

    var _saveRegistration = function (registration) {

        _logOut();

        return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
            return response;
        });
    };

    var _login = function (loginData) {
        // console.log('loginData > ', loginData)
        var deferred = $q.defer();

        var data = "Username=" + loginData.Username + "&Password=" + loginData.Password;

        if (loginData.useRefreshTokens) {
            data = data + "&client_id=" + ngAuthSettings.clientId;
        }


        $http.post(serviceBase + 'api/Account/AD/Token', data,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).
            success(function (response) {

                if (loginData.useRefreshTokens) {
                    // console.log('useRefreshTokens : authorizatio', new Date().getTime());
                    localStorageService.set('authorizationData', {
                        token: response.AccessToken,
                        userName: response.UserName,
                        refreshToken: response.refresh_token,
                        useRefreshTokens: true,
                        RoleId: response.RoleId
                    });
                }
                else {
                    // console.log('useRefreshTokens : unauthorizatio', new Date().getTime());
                    localStorageService.set('authorizationData', {
                        token: response.AccessToken,
                        userName: response.UserName,
                        refreshToken: "",
                        useRefreshTokens: false,
                        RoleId: ""
                    });
                }

                _authentication.isAuth = true;
                _authentication.userName = loginData.username;
                _authentication.useRefreshTokens = loginData.useRefreshTokens;
                _authentication.roleId = response.RoleId;

                deferred.resolve(response);

            }).error(function (err, status) {
                console.log('useRefreshTokens : unauthorizatio', err);
                _logOut();
                deferred.reject(err);
            });

        return deferred.promise;

    };

    var _logOut = function () {

        localStorageService.remove('authorizationData');

        _authentication.isAuth = false;
        _authentication.userName = "";
        _authentication.useRefreshTokens = false;
        _authentication.roleId = "";
        sessionStorage.clear();

        /*
        var max = sessionStorage.length;
        for (var i = 0; i < max; i++) {
            var key = sessionStorage.key(i);
            sessionStorage.removeItem(key);
        }
        */

    };

    var _fillAuthData = function () {
        console.log('authService.fillAuthData at ', new Date().getTime());
        var authData = localStorageService.get('authorizationData');



        if (authData) {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
            _authentication.useRefreshTokens = authData.useRefreshTokens;
            _authentication.roleId = authData.RoleId;

            //console.log('fillAuthData : authorizatio', new Date().getTime());

            return true;
        } else {
            $state.go('login');
            return false;
            //console.log('fillAuthData : unauthorizatio', new Date().getTime(), 'authData >>', authData);
        }
    }
    var _switchCompany = function () {

    }

    authServiceFactory.saveRegistration = _saveRegistration;
    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;
    authServiceFactory.switchCompany = _switchCompany;


    authServiceFactory.company = function (value) {
        if (value) {
            localStorageService.set('authorizationCompanyProfile', value);
        } else {
            return localStorageService.get('authorizationCompanyProfile');
        }
    };
    authServiceFactory.user = function (value) {
        if (value) {
            localStorageService.set('authorizationUsers', value);
        } else {
            return localStorageService.get('authorizationUsers');
        }
    };



    return authServiceFactory;
}]);