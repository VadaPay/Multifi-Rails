angular.module('multifiApp')
  .controller('addCustomerCtrl',
function ($scope, $http) {
    $scope.customer = {

    };

    $scope.addCustomer = function () {
      $http.post('/customers.json', $scope.customer).then(function(response) {
        console.log(response);
      });
    };
});
