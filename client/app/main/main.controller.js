'use strict';
angular.module('techkidsApp')
  .controller('MainController', function($scope, $http, $state){
    $scope.categories = [];
    $scope.result= "";

    $http.get('/api/post/categories').then(function(response){
      $scope.categories = response.data.data;
    });

    $scope.onCategorySelect = function(name) {
      $http.get('/api/post/by-category', {category:name}).then(function(response){
        console.log(response.data);
      });
    };

    // $scope.login = function() {
    //   var data = {
    //     username: $scope.username,
    //     password: $scope.password
    //   };
    //
    //   $http.post('/api/hello/login', data).then(function(response){
    //     if (response.data.message === "success") {
    //       $state.go("aboutUs");
    //     } else {
    //       $scope.result = response.data.message;
    //     }
    //   });
    // };
  });
