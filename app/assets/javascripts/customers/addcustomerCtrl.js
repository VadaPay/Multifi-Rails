angular.module('multifiApp')
  .controller('addCustomerCtrl',
function ($scope, $http, $state) {
    $scope.customer = {

    };

    $scope.addCustomer = function () {
      $http.post('/customers.json', $scope.customer).then(function(response) {
        // console.log(response);
        $state.go('index.customers');
      });
    };
});
