function OnConfig($stateProvider, $locationProvider, $compileProvider) {
    'ngInject';

    if (process.env.NODE_ENV === 'production') {
        $compileProvider.debugInfoEnabled(false);
    }

    $locationProvider.html5Mode(true);

    $stateProvider
    .state('Login', {
        url: '/login',
        controller: 'LoginCtrl as login',
        templateUrl:'state/login.html',
        title: 'Login'
    });

  //  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
