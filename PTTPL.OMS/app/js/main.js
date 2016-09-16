//'use strict';

//var app = angular.module('myApp',
//    ['ui.router', 'ngAria', 'LocalStorageModule', 'ngAnimate', 'ngLocale', 'ui.bootstrap', 'angularMoment']);

//app.constant('ngAuthSettings', {
//   WebService: 'http://localhost:50311/',
//    rootUrl: '',
//    WebClient: '',
//    ClientDirective: '',
//    clientId: 'id',
//    directory: {
//        directive: '',
//        modules: '',
//        assets: '',
//        widgets:''
//    }
//});

//app.run(['ngAuthSettings', '$window',
//    function (ngAuthSettings, $window) {

//        ngAuthSettings.WebClient = $window.location.origin;
//        ngAuthSettings.ClientDirective = ngAuthSettings.WebClient + '/app/';
//        debugger;

//        // directory
//        ngAuthSettings.directory.directive = ngAuthSettings.ClientDirective + 'widgets/';
//        ngAuthSettings.directory.modules = ngAuthSettings.ClientDirective + 'modules/';
//        ngAuthSettings.directory.assets = ngAuthSettings.ClientDirective + 'assets/';
//        ngAuthSettings.directory.widgets = ngAuthSettings.ClientDirective + 'widgets/';

//        ngAuthSettings.directory.theme = ngAuthSettings.ClientDirective + 'contents/ace-master/';

//    }]);

//app.config(function ($httpProvider) {
//     $httpProvider.interceptors.push('authInterceptorService');
//});

//app.run(['authService', function (authService) {
//     authService.fillAuthData();
//}]);


//app.controller('AppCtrl', ['$rootScope', '$scope', '$http', '$document', 'ngAuthSettings',
//    function ($rootScope, $scope, $http, $document, $ngAuthSettings) {
//        $rootScope.onProgress = false;




//}]);

import angular from 'angular';
// angular modules
import constants from './constants';
import onConfig from './config';
import onRun from './run';
import 'angular-ui-router';
import './templates';
import '../controllers';
import '../models';
// create and bootstrap application
const requires = [
    'ui.router',
    'templates',
    'app.controllers',
    'app.models'
];
window.app = angular.module('app', requires);
angular.module('app').constant('AppSettings', constants);
angular.module('app').config(onConfig);
angular.module('app').run(onRun);
angular.bootstrap(document, ['app'], {
    strictDi: true
});


