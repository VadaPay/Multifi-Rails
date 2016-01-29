angular.module('multifiApp')
  .controller('customersCtrl',
function($scope, $http) {
    $http.get('customers.json').then(function(response) {
      // console.log(response.data[0]);

      $scope.totalCustomers = response.data.length;
    });
});
