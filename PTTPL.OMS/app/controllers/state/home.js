//'use strict';

//app.controller('homeController', ['$scope', 'ngAuthSettings', '$state', 'authService', 'pageLoading', '$timeout', 'menuItemModel',
//function ($scope, ngAuthSettings, $state, authService, pageLoading, $timeout, menuItemModel) {

//    pageLoading.hide();
//    $scope.menu = {};
//    $scope.menuItems = {};
//    $scope.image;
//    $scope.footer;
//    initialize();

//    $scope.logout = function () {

//        $state.go('login');
//    }
//    $scope.page = function (p) {
//        debugger;
//        switch(p){
//            case 0: 
//                //$state.go();
//                break;
            
//            case 1: 
//                $state.go('home.index');break;
            
//            case 2: 
//                $state.go('home.quota'); break;
            
//            case 3:
//                $state.go('home.booking'); break;
            
//            case 4: 
//                break;
            
//            case 5: 
//                break;
//            case 6: 
//                $state.go('home.changepassword'); break;
//            case 7:
//                $state.go('customer.bagging'); break;
//            case 8:
//                $state.go('customer.domestic'); break;
//        }
//    }
//    function initialize() {

//        menuItemModel.getItem().then(function (res) {
//            var data = res.data;
//            $scope.menu = data.menu;
//            $scope.image = data.image;
//            $scope.menuItems = data.menuItem;
//            $scope.footer = data.footer;
//        });
//    }

//}]);