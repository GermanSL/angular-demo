var demoAppDirectives = demoAppDirectives || angular.module('demoAppDirectives', []);

demoAppDirectives.directive('welcome', function() {
  
  return {
    restrict: 'A',
    //template: ''
    templateUrl: '/templates/welcome'
  }
  
});