'use strict';

angular.module('myApp.controllers')
  .controller('HomeCtrl', function($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function(data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function(data, status, headers, config) {
      $scope.name = 'Error!'
    });

  });