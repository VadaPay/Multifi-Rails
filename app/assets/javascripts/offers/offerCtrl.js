angular.module('multifiApp')
.controller('offerCtrl',[
  '$scope','$http','$uibModal',
  function ($scope, $http, $uibModal) {
    $scope.message = 'this is working';


    $scope.open = function (size) {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'myModalContent.html',
        controller: 'newOfferModalCtrl',
      });
    };
  }
]);
