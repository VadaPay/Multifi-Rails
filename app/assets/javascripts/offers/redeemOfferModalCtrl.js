angular.module('multifiApp')
.controller('redeemOfferModalCtrl',
function($scope, $http, $uibModalInstance, offer) {


  console.log(offer);

  $scope.formSubmitted = false;

  $scope.customer = {};

  $scope.addCustomer = function () {


    $http.post('/customers.json', $scope.customer).then(function(response) {

      console.log(response.data);

      $http.get('/coupons/'+ offer._id.$oid +'.json').then(function(response) {
        $scope.formSubmitted = true;
        // console.log(response.data);
        $scope.coupon = response.data;
      });
    });
  };


});
