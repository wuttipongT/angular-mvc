'use strict'
app.directive("mytimepicker", function () {
    return {
        restrict: "E",
        replace: true,
        scope: true,
        controller: function () {
            this.name = '';
        },
        controllerAs: 'vm',
        link: function ($scope, element, attrs) {
            $scope.open = function (event) {
                console.log("open");
                event.preventDefault();
                event.stopPropagation();
                $scope.opened = true;
            };

            $scope.clear = function () {
                $scope.ngModel = null;
            };
        },
        templateUrl: 'widgets/dirTimepicker/dirTimepicker.html'
    }
})