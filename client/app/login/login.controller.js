'use strict';
angular.module('techkidsApp')
  .controller('LoginController', function($scope, $http, $state){
    $scope.isSignUp = true; //signup
    $scope.buttonText = "Get Started";

    $scope.changeState = function(state) {
      $scope.isSignUp = state;
      if (state) {
        $scope.buttonText = "Get Started";
      } else {
        $scope.buttonText = "Login";
      }
    };

    $scope.click = function(){
      if ($scope.isSignUp) { //click on Sign Up
        
      } else { // click on Login
        
      }
    }
  });
