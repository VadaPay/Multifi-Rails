angular.module('multifiApp')
.controller('editOfferCtrl',
function($scope, $stateParams, $http){
  $http.get('/offers/' + $stateParams.id + '.json').then(
    function(response) {
      $scope.offer = response.data;
    });
})
