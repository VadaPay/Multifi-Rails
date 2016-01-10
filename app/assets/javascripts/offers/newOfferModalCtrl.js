angular.module('multifiApp')
  .controller('newOfferModalCtrl',
  function ($scope, $http, $uibModalInstance) {
    $scope.ok = function () {
      $uibModalInstance.close();
    };

    $scope.minimal = function () {
      
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
