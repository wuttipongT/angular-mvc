'use strict'
app.directive("mydatepicker", function () {
    return {
        restrict: "EA",
        replace: true,
        scope:{
            dateOptions: "=",
            opened: "=",
            placeHolder: "=",
            ngModel: "="
        },
        scope:true,
        controller: function () {
            this.name = '';
        },
        link: function ($scope, element, attrs) {
            $scope.open = function(event){
                console.log("open");
                event.preventDefault();
                event.stopPropagation();
                $scope.opened = true;
            };

            $scope.clear = function () {
                $scope.ngModel = null;
            };
        },
        templateUrl: 'widgets/dirDatepicker/dirDatepicker.html'
    }
})
