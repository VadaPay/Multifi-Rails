angular.module('multifiApp')
.controller('MainCtrl', [
  '$scope',
  '$state',
  'Auth',

  function ($scope, $state, Auth) {
    // $scope.test = 'Hello world!';

    $scope.logout = function(){
      Auth.logout().then(function() {
        $state.go('login');
      }).catch(function() {
        $state.go('login');
      });
    }
  }
]);
