angular.module('multifiApp')
  .controller('newOfferModalCtrl',
  function ($scope, $http, $uibModalInstance) {
    $scope.template = 1;
    $scope.templates = [
      'minimal',
      'flat',
      'material'
    ];

    $scope.ok = function () {
      $uibModalInstance.close($scope.template);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
