angular.module('multifiApp')
.controller('editOfferCtrl',
function($scope, $stateParams, $http, $state, moment){
  $http.get('/offers/' + $stateParams.id + '.json').then(
    function(response) {
      $scope.offer = response.data;
    });


    $scope.changeExpiry = function (newValue, oldValue) {
      // console.log(newValue);
      $scope.offer.expiry = newValue;
      console.log($scope.offer);
    };

    $scope.changeSchedule = function(newValue, oldValue) {
      $scope.offer.scheduledFor = newValue;
      console.log($scope.offer);
    };
    // $scope.template_id = $stateParams.id;
    // $scope.templates = [
    //   'minimal',
    //   'flat',
    //   'material'
    // ];
    // $scope.template = $scope.templates[($scope.template_id - 1)];
    //
    // $scope.offer.theme = $scope.templates[($scope.template_id - 1)];

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
    };


    $scope.scheduleOffer = function () {
      // console.log($scope.offer);
      $scope.offer.isDraft = false;
      $scope.offer.isScheduled = true;
      $http.put('/offers/' + $stateParams.id + '.json', $scope.offer).then(function(response) {
        $state.go('index.offers');
      });
    };

    $scope.saveAsDraft = function() {
      $scope.offer.isDraft = true;
      $http.put('/offers/' + $stateParams.id + '.json', $scope.offer).then(function(response) {
        $state.go('index.offers');
      });
    };

    $scope.createOffer = function () {
      $scope.offer.isDraft = false;
      console.log($scope.offer);

      $http.put('/offers/' + $stateParams.id + '.json', $scope.offer).then(function(response) {
        $state.go('index.offers');
      });
    };
  })
