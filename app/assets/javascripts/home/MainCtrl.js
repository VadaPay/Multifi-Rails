angular.module('multifiApp')
.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test = 'Hello world!';
    // $scope.posts = posts.posts;
    //
    //
    // $scope.addPost = function(){
    //   if(!$scope.title || $scope.title === '') { return; }
    //   // $scope.posts.push({
    //   //   title: $scope.title,
    //   //   link: $scope.link,
    //   //   upvotes: 0,
    //   //   comments: [
    //   //     {author: 'Joe', body: 'Cool post!', upvotes: 0},
    //   //     {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
    //   //   ]
    //   // });
    //   posts.create({
    //       title: $scope.title,
    //       link: $scope.link
    //   })
    //   $scope.title = '';
    //   $scope.link = '';
    // };
    //
    // $scope.incrementUpvotes = function(post) {
    //   posts.upvoteComment(post, comment);
    // };
  }


]);
