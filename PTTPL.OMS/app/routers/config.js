//app.run(['$rootScope', '$state', '$stateParams',
//    function ($rootScope, $state, $stateParams) {
//        $rootScope.$state = $state;
//        $rootScope.$stateParams = $stateParams;

//        $state.go('login');
//    }
//]);


//app.config(['$stateProvider', '$urlRouterProvider', 'ngAuthSettings',
//    function ($stateProvider, $urlRouterProvider, $ngAuthSettings) {

//        // admin router
//        $stateProvider.state('home', {
//            url: "/home",
//            templateUrl: $ngAuthSettings.ClientDirective + "views/state/home.html",
//            controller: "homeController",
//        });


//        $stateProvider.state('customer', {
//            url: "/customer",
//            templateUrl: $ngAuthSettings.ClientDirective + "views/state/home.html",
//            controller: "homeController",
//        });

//        // use controller
//        $stateProvider.state('home.index', {
//            url: "/index",
//            templateUrl: $ngAuthSettings.ClientDirective + "views/partials/home/index.html",
//            controller: 'indexController'
//        });

//        // login router
//        $stateProvider.state('login', {
//            url: "/login",
//            templateUrl: $ngAuthSettings.ClientDirective + "views/state/login.html",
//            controller: 'loginController'
//        });

//        $stateProvider.state('home.quota', {
//            url: "/quota",
//            templateUrl: $ngAuthSettings.ClientDirective + "views/partials/quota/index.html",
//            controller: 'quotaController'
//        });
//        $stateProvider.state('home.booking', {
//            url: "/booking",
//            templateUrl: $ngAuthSettings.ClientDirective + "views/partials/booking/index.html",
//            controller: 'bookingController'
//        });

//        $stateProvider.state('home.changepassword', {
//            url: "/changepassword",
//            templateUrl: $ngAuthSettings.ClientDirective + "views/partials/changepassword/index.html",
//            //controller: '??Controller'
//        });

//        $stateProvider.state('home.test', {
//            url: '/test',
//            templateUrl: $ngAuthSettings.ClientDirective + "views/partials/test/TestPage.html",
//            controller: 'testController'
//        });

//        $stateProvider.state('customer.bagging', {
//            url: '/bagging',
//            templateUrl: $ngAuthSettings.ClientDirective + "views/partials/customer/bagging.html",
//            controller: 'baggingController'
//        });

//        $stateProvider.state('customer.createbagging', {
//            url: '/createbagging',
//            templateUrl: $ngAuthSettings.ClientDirective + "views/partials/customer/bagging-create.html",
//            controller: 'baggingController'
//        });

//        $stateProvider.state('customer.domestic', {
//            url: '/domestic',
//            templateUrl: $ngAuthSettings.ClientDirective + "views/partials/customer/domestic.html",
//            controller: 'domesticController',
//        });

        
//        // For any unmatched url, send to default
//        // $urlRouterProvider.otherwise("/login");

//    }]);

//function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
//    'ngInject';

//    if (process.env.NODE_ENV === 'production') {
//        $compileProvider.debugInfoEnabled(false);
//    }

//    $locationProvider.html5Mode(true);

//    $stateProvider
//    .state('Login', {
//        url: '/login',
//        controller: 'LoginCtrl as login',
//        templateUrl: 'state/login.html',
//        title: 'Login'
//    });

//    $urlRouterProvider.otherwise('/login');

//}

//export default OnConfig;
