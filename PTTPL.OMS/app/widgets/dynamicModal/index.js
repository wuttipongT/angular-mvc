'use strict'
app.directive('reuserModal', function () {
    return {
        templateUrl: 'widgets/dirModal/dirModal.html',
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: { visible: '=', onSown: '&', onHide: '&', data: '=ngModel', method: '='},
        link: function postLink(scope, element, attrs) {
           

            // cancel box
            $(element).modal({
                show: false,
                keyboard: attrs.keyboard,
                backdrop: attrs.backdrop
            });

            scope.$watch(function () { return scope.visible; }, function (value) {

                if (value == true) {
                    $(element).modal('show');
                } else {
                    $(element).modal('hide');
                }
            });

            $(element).on('shown.bs.modal', function () {
                scope.$apply(function () {
                    scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('shown.bs.modal', function () {
                scope.$apply(function () {
                    scope.onSown({});
                });
            });

            $(element).on('hidden.bs.modal', function () {
                scope.$apply(function () {
                    scope.$parent[attrs.visible] = false;
                });
            });

            $(element).on('hidden.bs.modal', function () {
                scope.$apply(function () {
                    scope.onHide({});
                });
            });


            
        }
    };
}
);

app.directive('modalHeader', function () {
    return {
        template: '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">{{title}}</h4></div>',
        replace: true,
        restrict: 'E',
        scope: { title: '@' }
    };
});

app.directive('modalBody', function () {
    return {
        template: '<div class="modal-body" ng-transclude></div>',
        replace: true,
        restrict: 'E',
        transclude: true
    };
});

app.directive('modalFooter', function () {
    return {
        templateUrl: 'widgets/dirModal/footerTemplete.html',
        replace: true,
        restrict: 'E',
        transclude: true,
        scope: { data: '=ngModel', method: '=' },
        link: function postLink(scope, element, attrs) {
            var formData = scope.data;
            var numMethod = scope.method;
            console.log(data);
            console.log(numMethod);

            scope.confirm = function () {
                switch (numMethod) {
                    case 1: confirmBox(formdata); break;
                }
            }

            function confirmBox(data) {
                alert('hello');
            }
        }
    };
});