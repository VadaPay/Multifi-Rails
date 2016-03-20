angular.module('multifiApp')
.controller('redeemCouponCtrl',
function($http, $scope) {

  $scope.coupon = {};
  $scope.redeemCoupon = function() {
    $http.put('/coupons/' + $scope.coupon.code +'.json', $scope.offer).then(function(response) {
      console.log(response.date);
    });
  }


});
