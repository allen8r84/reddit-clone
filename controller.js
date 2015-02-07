var app = angular.module('reddit');

app.controller('PostController', function($scope){
    $scope.test = "Welcome to reddit";
    $scope.posts = [];
    $scope.addPost = function() {
        $scope.newPost.timestamp =  Date.now();
        $scope.newPost.karma = 0;
        $scope.newPost.comment = [];
        console.log($scope.newPost);
        
        $scope.posts.push($scope.newPost);
        $scope.reset(); //always at the end
    }

    $scope.reset = function() {
        $scope.newPost = {};
    }




});