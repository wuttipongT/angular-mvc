
function menuItemModel($http, AppSettings, $q) {
    'ngInject';
    var ws = AppSettings.WebClient;
    var uri = {
        finishGood: ws+'/json/data.json'
    }
    const service = {};

    service.get = function() {
        //return new Promise((resolve, reject) => {
        //    $http.get(uri.finishGood).success((data) => {
        //        resolve(data);
        //    }).error((err, status) => {
        //        reject(err, status);
        //    });
        //});

        var deferred = $q.defer();

        $http.get(uri.finishGood).then(function (results) {
            if (results.status == 200) {
                deferred.resolve(results.data);
            } else {
                deferred.reject({ 'Message': results.Message });
            }
        }, function error(response) {
            var data = response.data;
            deferred.reject({ 'Message': data.Message });
        });
        return deferred.promise;
       
    };

    return service;
}
export default {
    name: 'menuItemModel',
    fn: menuItemModel
};