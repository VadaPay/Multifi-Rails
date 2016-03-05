angular.module('multifiApp')
.controller('ReportsCtrl', [
  '$scope',
  function($scope){
    $scope.myJson = {
      type : 'line' ,
      series : [
        { values : [ 54 , 23 , 34 , 23 , 43 ] },
        { values : [ 10 , 15 , 16 , 20 , 40 ] }
      ]
    };
  }]);
