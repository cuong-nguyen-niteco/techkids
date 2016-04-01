'use strict';

angular.module('techkidsApp', [
  'techkidsApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .state('aboutUs', {
        url: '/about-us',
        templateUrl: 'app/about-us/about-us.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController'
      })

    ;

    $locationProvider.html5Mode(true);
  });
