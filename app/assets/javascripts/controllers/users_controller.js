var demoAppControllers = demoAppControllers || angular.module('demoAppControllers', []);

demoAppControllers.controller('UserListController', 
                             ['$scope', '$location', 
                             function($scope, $location) {
  
  //var users = User.query();
  //$scope.users = $scope.$parent.users; //users;

  $scope.showUserDetails = function(user){
      $location.path('/users/'+user.id);
  };
  
}]);

demoAppControllers.controller('UserDetailsController', ['$scope', '$location', '$routeParams', 'User', function($scope, $location, $routeParams, User ) {
  
  var currentUser = User.get({ id: $routeParams.userId });
  $scope.currentUser = currentUser;
  
  $scope.deleteUser = function(){
      $scope.currentUser.$delete({ id: $scope.currentUser.id }, function(result) {
        if(result.success){
            $scope.$parent.users = User.query();
            $location.path('/');
        }
        else
            alert('User not deleted!');
    });
  };
  
  
}]);

demoAppControllers.controller('UserNewController', ['$scope', '$location', '$routeParams', 'User', function($scope, $location, $routeParams, User ) {
  
    $scope.user = new User();
    
    $scope.addUser = function() {
        $scope.user.$save(function(result) {
          if(result.success){
            $scope.$parent.users = User.query();
            $location.path('/users/' + result.user.id);
          }
          else
            alert('User not saved!');
        });
    };
  
}]);

demoAppControllers.controller('UserEditController', ['$scope', '$location', '$routeParams', 'User', function($scope, $location, $routeParams, User ) {
  
  var user = User.get({ id: $routeParams.userId });
  $scope.user = user;
  
  $scope.updateUser = function() {
    $scope.user.$update({ id: user.id }, function(result) {
        if(result.success)
            $location.path('/users/' + result.user.id);
        else
            alert('User not saved!');
    });
  };
  
}]);