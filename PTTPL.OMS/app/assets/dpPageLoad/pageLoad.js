'use strict';

app.factory('pageLoading', ['$rootScope', function ($rootScope) {
    return {
        show: function () {
            $rootScope.showLoading = true;
        },
        hide: function () {
            $rootScope.showLoading = false;
        }
    };
}]).directive('dpPageload', ['$rootScope', 'ngAuthSettings', '$window', 'commonService',
function ($rootScope, ngAuthSettings, $window, commonService) {
    return {
        restrict: 'E',
        replace: false,
        controller: ['$scope', 'ngAuthSettings', function ($scope) {
            $scope.ClientDirective = ngAuthSettings.ClientDirective;
            $scope.show = false;
            $rootScope.showLoading = true;
            $scope.Match = commonService.Match;


        }],
        link: function ($scope, element, attributes) {

            function adjustStyle() {
                var _height = $(window).height();
                var _width = $(window).width();
                var windowScrollTop = $(window).scrollTop();
                _height = _height + windowScrollTop;
                $scope.myStyle = {
                    body: {
                        'height': _height,
                        'width': _width,
                        "position": "absolute",
                        "background-color": "rgb(40,40,40)",
                        "top": "0",
                        "left": "0",
                        "z-index": "999999",
                    },
                    img: {
                        'height': 50,
                        'width': 50,
                        'margin-top': $scope.Match.percent(_height, 45),
                        'margin-left': $scope.Match.percent(_width, 48),
                    },
                    text: {
                        'height': 50,
                        'margin-top': 5,
                        'margin-left': $scope.Match.percent(_width, 35),
                    }
                }
            };

            angular.element($window).bind('resize.' + $scope.$id, function () {
                adjustStyle();
            });

            $rootScope.$watchCollection("showLoading", function (news, olds) {
                $scope.show = news;

            }, true);

            $scope.$on('$destroy', function () {
                angular.element($window).unbind('resize.' + $scope.$id);
            });

            adjustStyle();
            $scope.$watchCollection("show", function (news, olds) {
                adjustStyle();
            }, true);

        },
        templateUrl: ngAuthSettings.ClientDirective + "assets/dpPageLoad/contents/template.html",
    };
}]);
