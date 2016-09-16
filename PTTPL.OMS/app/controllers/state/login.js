//'use strict';
//app.controller('loginController', ['$scope',
//    function($scope) {

//        //$scope.loginData = {};
//        //pageLoading.hide();


//        /* $scope.login = function () {
//        $state.go('home.index');
//    }
//*/

//    }
//]);
function LoginCtrl(menuItemModel) {

    // ViewModel
    const vm = this;
    vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
    vm.number = 1234;
    vm.data = {};
    menuItemModel.get().then(function (res) {
        vm.data = res;
    });
}

export default {
    name: 'LoginCtrl',
    fn: LoginCtrl
};