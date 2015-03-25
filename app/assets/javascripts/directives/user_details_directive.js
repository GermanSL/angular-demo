var demoAppDirectives = demoAppDirectives || angular.module('demoAppDirectives', []);

demoAppDirectives.directive('userDetails', function() {
  
  return {
    restrict: 'A',
    templateUrl: '/templates/user_details'
  }
  
});