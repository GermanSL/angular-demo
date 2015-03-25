var demoApp = angular.module('demo', [
                                      'ngRoute', 
                                      'ngResource', 
                                      'demoAppDirectives', 
                                      'demoAppControllers', 
                                      'demoAppServices'
                                     ]
                            );

demoApp.config(function($httpProvider) {
    
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    
});    

demoApp.run(function($rootScope, User) {
  $rootScope.users = User.query();
});

demoApp.config([
  '$routeProvider',
  
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'welcome.html'
      }).
      when('/users/new', {
        templateUrl: 'user_form.html',
        controller: 'UserNewController'
      }).
      when('/users/:userId', {
        templateUrl: 'user_details.html',
        controller: 'UserDetailsController'
      }).
      when('/users/:userId/edit', {
        templateUrl: 'user_form.html',
        controller: 'UserEditController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
  
]);