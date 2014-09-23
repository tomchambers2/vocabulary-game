'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'ngRoute'
]).config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  }).when('/game', {
    templateUrl: 'partials/game.html',
    controller: 'GameCtrl'
  }).when('/highscore', {
    templateUrl: 'partials/highscore.html',
    controller: 'HighscoreCtrl'
  }).otherwise({
    redirectTo: '/home'
  });

  $locationProvider.html5Mode(true);
});