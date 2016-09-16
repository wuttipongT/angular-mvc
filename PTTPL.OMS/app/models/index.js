import angular from 'angular';

const bulk = require('bulk-require');
const servicesModule = angular.module('app.models', []);
const services = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(serviceMap) {
    
    Object.keys(serviceMap).forEach((key) => {
        let item = serviceMap[key];

        if (!item) {
            return;
        }

        if (item.fn && typeof item.fn === 'function') {
            servicesModule.service(item.name, ['$http','AppSettings','$q', item.fn]);
        } else {
            declare(item);
        }
    });
}

declare(services);

export default servicesModule;