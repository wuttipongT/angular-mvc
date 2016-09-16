//'use strict'
//app.factory('ProductsModel',
//    ['$http', '$q', 'ngAuthSettings',
//        function ($http, $q, ngAuthSettings, commonDateTime) {

//            var ws = ngAuthSettings.WebService;

//            var uri = {
//                finishGood: ws + 'api/product/'
//            }

//            return {
//                model: {},
//                add: function (model) {
//                    return Add(model);
//                },
//                edit: function (model) {
//                    return Edit(model);
//                },
//                filter:  function (model) {
//                    return filter(model);
//                },
//                remove: deleteItem,
//                findItem: findItem,
//                getItem: function (model) {
//                    return post(model, 'getItem');
//                },
//                filterSaleStock: filterSaleStock,
//            };

//            function Add(model) {
//                var deferred = $q.defer();
//                $http.post(uri.finishGood + 'Add', model).then(function (results) {
//                    if (results.status == 200) {
//                        deferred.resolve(results);
//                    } else {
//                        deferred.reject({ 'Message': results.Message });
//                    }
//                }, function error(response) {

//                    var data = response.data;

//                    deferred.reject({ 'Message': data.Message });
//                });

//                return deferred.promise;
//            };

//            function findItem(item) {
//                var deferred = $q.defer();

//                $http.get(uri.finishGood + "Find/" + item.id).then(function (results) {
//                    if (results.status == 200) {
//                        deferred.resolve(results.data);
//                    } else {
//                        deferred.reject({ 'Message': results.Message });
//                    }
//                }, function error(response) {
//                    var data = response.data;
//                    deferred.reject({ 'Message': data.Message });
//                });
//                return deferred.promise;
//            }

//            function Edit(model) {
//                var deferred = $q.defer();
//                $http.post(uri.finishGood + 'Edit', model).then(function (results) {
//                    if (results.status == 200) {
//                        deferred.resolve(results);
//                    } else {
//                        deferred.reject({ 'Message': results.Message });
//                    }
//                }, function error(response) {

//                    var data = response.data;

//                    deferred.reject({ 'Message': data.Message });
//                });

//                return deferred.promise;
//            };

//            function deleteItem(item) {
//                var deferred = $q.defer();

//                $http.get(uri.finishGood + "Delete/" + item.id).then(function (results) {
//                    if (results.status == 200) {
//                        deferred.resolve(results.data);
//                    } else {
//                        deferred.reject({ 'Message': results.Message });
//                    }
//                }, function error(response) {
//                    var data = response.data;
//                    deferred.reject({ 'Message': data.Message });
//                });
//                return deferred.promise;
//            }

//            function filter(model) {
//                var deferred = $q.defer();
//                $http.post(uri.finishGood + 'Filter', model).then(function (results) {
//                    if (results.status == 200) {
//                        deferred.resolve(results.data);
//                    } else {
//                        deferred.reject({ 'Message': results.Message });
//                    }
//                }, function error(response) {
//                    var data = response.data;
//                    deferred.reject({ 'Message': data.Message });
//                });
//                return deferred.promise;
//            }

//        }]);

