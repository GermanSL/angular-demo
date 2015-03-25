var demoAppDirectives = demoAppDirectives || angular.module('demoAppDirectives', []);

demoAppDirectives.directive('userForm', function() {
  
  return {
    restrict: 'A',
    //template: ''
    templateUrl: '/templates/user_form'
  }
  
});