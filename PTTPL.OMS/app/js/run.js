function OnRun($rootScope,$state,$stateParams, AppSettings, $window) {
    'ngInject';
    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $rootScope.pageTitle = '';
        if (toState.title) {
            $rootScope.pageTitle += toState.title;
            $rootScope.pageTitle += ' \u2014 ';
        }

        $rootScope.pageTitle += AppSettings.appTitle;
    });

    AppSettings.WebClient = $window.location.origin;
    AppSettings.ClientDirective = AppSettings.WebClient + '/app/';

    // directory
    AppSettings.directory.directive = AppSettings.ClientDirective + 'widgets/';
    AppSettings.directory.modules = AppSettings.ClientDirective + 'modules/';
    AppSettings.directory.assets = AppSettings.ClientDirective + 'assets/';
    AppSettings.directory.widgets = AppSettings.ClientDirective + 'widgets/';

    AppSettings.directory.theme = AppSettings.ClientDirective + 'contents/ace-master/';

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.go('Login');
}
export default OnRun;