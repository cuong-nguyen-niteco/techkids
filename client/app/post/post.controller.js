/**
 * Created by Cragon on 4/1/2016.
 */
'use strict';
angular.module('techkidsApp')
  .controller('PostController', function($scope, $http, $state){
    CKEDITOR.replace( 'editor' );
    $scope.categories = [{name:"--Select category"}];
    $http.get('/api/post/categories').then(function(response){
      $scope.categories = $scope.categories.concat(response.data.data);
    });
    $scope.submitPost = function () {
      console.log(CKEDITOR.instances.editor.getData());
    };
  });
