var demoAppDirectives = demoAppDirectives || angular.module('demoAppDirectives', []);

demoAppDirectives.directive('welcome', function() {
  
  return {
    restrict: 'A',
    templateUrl: '/templates/welcome'
  }
  
});