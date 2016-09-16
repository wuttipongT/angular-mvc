﻿'use strict';

// refence : www.codeproject.com/Articles/784106/AngularJS-Token-Authentication-using-ASP-NET-Web-A

app.factory('authInterceptorService', ['$q', '$location',
'localStorageService', 'ngAuthSettings',  function ($q, $location, localStorageService, ngAuthSettings) {

    var authInterceptorServiceFactory = {};

    var _request = function (config) {

        config.headers = config.headers || {};

        var authData = localStorageService.get('authorizationData');
        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        }
       // console.log('authInterceptorService > authInterceptorService _request >', authData);
        return config;
    }

    var _responseError = function (rejection) {
        if (rejection.status === 401) {
            //$location.path('/login');
           // console.log('authInterceptorService > authInterceptorService _responseError >', rejection.status);
            window.location.replace(ngAuthSettings.LoginPath);
        }
        return $q.reject(rejection);
    }

    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;

    return authInterceptorServiceFactory;
}]);
