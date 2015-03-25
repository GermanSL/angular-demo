var demoAppServices = demoAppServices || angular.module('demoAppServices', []);

demoAppServices.factory('User', function($resource) {
  
  return $resource('/users/:id.json', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
  
});