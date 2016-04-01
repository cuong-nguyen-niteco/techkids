'use strict';
angular.module('techkidsApp')
  .controller('LoginController', function($scope, $http, $state){
    $scope.isSignUp = true; //signup
    $scope.buttonText = "Get Started";
    $scope.title = "Sign Up for Free";

    $scope.changeState = function(state) {
      $scope.isSignUp = state;
      if (state) {
        $scope.title = "Sign Up for Free";
        $scope.buttonText = "Get Started";
      } else {
        $scope.title = "Welcome Back";
        $scope.buttonText = "Login";
      }
    };

    $scope.click = function(){
      if ($scope.isSignUp) { //click on Sign Up

      } else { // click on Login
        var data = {
          username: $scope.username,
          password: $scope.password
        };

        $http.post('/api/user/login', data).then(function(response){
          console.log(response.data);
        });
      }
    }
  });
