angular.module('multifiApp')
  .controller('viewOfferCtrl',
  function ($scope, $stateParams, $http, moment, $uibModal) {

    // perform the following:
    // 1. if the offer is expired show a message that it is expired
    // 2. If coupons are finsihed then show a message that this is expired
    // 3. if user pressed get coupon, show a form


    $http.get('/offers/' + $stateParams.id + '.json').then(
      function(response) {
        $scope.offer = response.data;
        console.log($scope.offer);

        $scope.interval = moment($scope.offer.expiry)
        console.log($scope.interval);
      });

      $scope.redeemOffer = function () {

      };
  });
