var demoAppDirectives = demoAppDirectives || angular.module('demoAppDirectives', []);

demoAppDirectives.directive('userList', function() {
  
  return {
    restrict: 'E',
    //template: ''
    templateUrl: '/templates/user_list'
  }
  
});