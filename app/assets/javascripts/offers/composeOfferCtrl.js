angular.module('multifiApp')
.controller('composeOfferCtrl',[
  '$scope','$http','$state',
  function ($scope, $http, $state) {
    $scope.offer = {}
    $scope.offer.title = 'Test Offer';
    $scope.offer.details = 'Test Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab. Sed ut perspiciatis unde omnis iste natus error sit';
    $scope.offer.termsconditions = 'Test Test Test';
    $scope.offer.url = "app.multifi.io";

    $scope.createOffer = function () {
      $http.post('/offers.json', $scope.offer).then(function(response) {
        $state.go('index.offers');
      });
    };
  }
]);
