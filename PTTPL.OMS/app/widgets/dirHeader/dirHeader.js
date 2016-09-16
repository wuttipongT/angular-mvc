app.directive("header", function (ngAuthSettings) {
    return {
        restrict: 'E',
        scope: { navs:'=' },
        controller: function ($scope) {
            //var user = "นาย เรียนรู้คน เรียนรู้โลก (บริษัท ตัวอย่างจำกัด)",
            //    obj = {
            //        "navbar": [
            //                { menuItem_Th: user, menuItem_Eng: user, style: {'margin-top':'5px'}, icon: '',  dropdowns: [] },
            //                { menuItem_Th: '', menuItem_Eng: '', style: {}, icon: 'fa-user', dropdowns: [{ menuItem_Th: 'Log out', menuItem_Eng: 'Log out' }] }
            //        ]
            //    };

           // $scope.navs = obj.navbar;

        },
        controllerAs: 'headerCtrl',
        templateUrl: ngAuthSettings.ClientDirective + "widgets/dirHeader/dirHeader.html",
    }
});