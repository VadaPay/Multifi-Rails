angular.module('multifiApp')
.controller('offerCtrl',[
  '$scope','$http','$uibModal',
  function ($scope, $http, $uibModal) {
    $scope.message = 'this is working';
    $scope.firstrun = true;

    $http.get('/offers.json').then(function(response) {
      $scope.offers = response.data;
      if ($scope.offers.length !== 0) {
        $scope.firstrun = false;
      }
    });

    $scope.open = function (size) {
      var modalInstance = $uibModal.open({
        animation: true,
        size: 'lg',
        templateUrl: 'CreateOfferModal.html',
        controller: 'newOfferModalCtrl',
      });
    };
  }
]);
