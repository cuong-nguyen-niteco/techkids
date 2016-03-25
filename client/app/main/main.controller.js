'use strict';
angular.module('techkidsApp')
  .controller('MainController', function($scope, $http, $state){
    $scope.helloMessage = "Hello";
    $scope.countries = [];
    $scope.result= "";

    $http.get('/api/hello/country').then(function(response){
      $scope.countries = response.data;
    });

    $scope.addCountry = function() {
      $scope.countries.push("US");
    };

    $scope.login = function() {
      var data = {
        username: $scope.username,
        password: $scope.password
      };

      $http.post('/api/hello/login', data).then(function(response){
        if (response.data.message === "success") {
          $state.go("aboutUs");
        } else {
          $scope.result = response.data.message;
        }
      });
    };

    $scope.create = function() {
      var data = {
        name: $scope.username,
        email: "cuong.nguyen@niteco.se",
        password: $scope.password
      };

      $http.post('/api/user/create', data)
        .then(function(response){
          // if (response.data.message === "success") {
          //   $state.go("aboutUs");
          // } else {
          //   $scope.result = response.data.message;
          // }

          console.log(response);
        })
        .catch(function(err){
          console.log(err);
        });
    };
  });
