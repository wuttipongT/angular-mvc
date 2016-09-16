'use strict';

app.directive('demoTest', ['ngAuthSettings', '$window', 'commonService', 'pageLoading', '$timeout',
function (ngAuthSettings, $window, commonService, pageLoading, $timeout) {
    return {
        restrict: 'E',
        controllerAs: '$ctrl',
        scope: {
            bodyStyle: "@?",
            items: "=?",
            item: "=?",
            onSelected: "=",
            onShow: "="
        },
        controller: ['$scope', 'ngAuthSettings', function ($scope, ngAuthSettings) {
            $scope.root = ngAuthSettings.ClientDirective + 'contents/ace-master/';

            var webservice = ngAuthSettings.WebService;
            var vm = this;

            pageLoading.hide();

            $scope.mode = "list";
            $scope.title = "จัดการข้อมูล";
            $scope.items = {};

            $scope.item = {
                name: '',
                code: '',
                id: ''
            };
            $scope.onClose = function () {
                $scope.onShow = false;
            }

            $scope.search = function () {
                // searchData();

            };

            $scope.add = function () {
                $scope.mode = 'add';
                $scope.title = "เพิ่มข้อมูลใหม่";

                pageLoading.show();

                $timeout(function () {
                    pageLoading.hide();
                }, 500);
            };

            $scope.cancel = function () {

                $scope.mode = "list";
                $scope.title = "จัดการข้อมูล";
            }

            $scope.provinces = {
                items: {},
                change: function () {

                }
            }

            $scope.init = function () {
                
            }

        }],
        link: function ($scope, $element, $attributes) {

        },
        templateUrl: ngAuthSettings.ClientDirective + "modules/demo/view/demo.html",
    };
}]);
