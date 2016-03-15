angular.module('multifiApp')
.controller('composeOfferCtrl',[
  '$scope','$http','$state', '$stateParams', 'moment',
  function ($scope, $http, $state, $stateParams, moment) {

    $scope.coupons = 0;


    $scope.offer = {}
    $scope.offer.title = 'Test Offer';
    $scope.offer.details = 'Test Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab. Sed ut perspiciatis unde omnis iste natus error sit';
    $scope.offer.termsconditions = 'Test Test Test';
    $scope.offer.url = "app.multifi.io";
    $scope.offer.couponlimit = 10;
    $scope.offer.expiry = {};
    $scope.offer.scheduledFor = {};
    $scope.offer.isScheduled = false;
    // $scope.offer.expiry = moment();

    // $scope.expiry = moment();
    // $scope.expirydate = moment().unix();
    //
    //

    $scope.changeExpiry = function (newValue, oldValue) {
      // console.log(newValue);
      $scope.offer.expiry = newValue;
      console.log($scope.offer);
    };

    $scope.changeSchedule = function(newValue, oldValue) {
      $scope.offer.scheduledFor = newValue;
      console.log($scope.offer);
    }


    $scope.template_id = $stateParams.id;
    $scope.templates = [
      'minimal',
      'flat',
      'material'
    ];
    $scope.template = $scope.templates[($scope.template_id - 1)];

    $scope.offer.theme = $scope.templates[($scope.template_id - 1)];

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
      $scope.offer.isScheduled = true;
      $http.post('/offers.json', $scope.offer).then(function(response) {
        $state.go('index.offers');
      });
    };

    $scope.saveAsDraft = function() {
      $scope.offer.isDraft = true;
      $http.post('/offers.json', $scope.offer).then(function(response) {
        $state.go('index.offers');
      });
    };

    $scope.createOffer = function () {
      $scope.offer.isDraft = false;
      console.log($scope.offer);

      $http.post('/offers.json', $scope.offer).then(function(response) {
        $state.go('index.offers');
      });
    };
  }
]);
