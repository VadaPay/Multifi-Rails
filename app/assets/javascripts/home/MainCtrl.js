angular.module('multifiApp')
.controller('MainCtrl', [
  '$scope',
  '$state',
  'Auth',
  '$http',

  function ($scope, $state, Auth, $http) {
    // $scope.test = 'Hello world!';

    $scope.liveoffers = 0;

    $scope.customers = 0;

    $http.get('/offers.json').then(function (response) {
      $scope.liveoffers  = response.data.length;
    });

    $http.get('/customers.json').then(function(response) {
      $scope.customers = response.data.length;
    });

    $scope.logout = function(){
      Auth.logout().then(function() {
        $state.go('login');
      }).catch(function() {
        $state.go('login');
      });
    }
  }
]);
