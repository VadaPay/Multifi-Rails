angular.module('multifiApp')
.controller('composeOfferCtrl',[
  '$scope','$http','$state', '$stateParams',
  function ($scope, $http, $state, $stateParams) {
    $scope.offer = {}
    $scope.offer.title = 'Test Offer';
    $scope.offer.details = 'Test Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab. Sed ut perspiciatis unde omnis iste natus error sit';
    $scope.offer.termsconditions = 'Test Test Test';
    $scope.offer.url = "app.multifi.io";

    $scope.template_id = $stateParams.id;
    $scope.templates = [
      'minimal',
      'flat',
      'material'
    ];
    $scope.template = $scope.templates[($scope.template_id - 1)];

    $scope.uploading = $scope.rejected = false;
    $scope.s3OptionsUri = 'aws/s3_access_token?upload_type=avatar';
    $scope.bucket = 'multifi-dev';

    $scope.$on('s3upload:progress', function(event, response) {
      $scope.uploading = true;
    });
    $scope.$on('s3upload:success', function(event, response, url) {
      $scope.uploading = $scope.uploading_offer_image = false;
      angular.element(document.querySelector("#s3-upload-offer-container .progress .progress-bar")).css({width: '0px'});
    });
    $scope.$on('s3upload:error', function(event, response) {
      angular.element(document.querySelector("#s3-upload-offer-container .progress .progress-bar")).css({width: '0px'});
      $scope.uploading = false;
      $scope.rejected = true;
    });
    $scope.$on('s3upload:abort', function(event, response) {
      angular.element(document.querySelector("#s3-upload-offer-container .progress .progress-bar")).css({width: '0px'});
      $scope.uploading = false;
    });
    $scope.image_remove = function() {
      $scope.offer.remote_offer_url = '';
    }

    $scope.createOffer = function () {
      $http.post('/offers.json', $scope.offer).then(function(response) {
        $state.go('index.offers');
      });
    };
  }
]);
