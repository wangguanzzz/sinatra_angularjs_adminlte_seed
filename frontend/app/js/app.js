'use strict';
// use strict means any variable need to be defined explicitly
// App Module 
var app = angular.module('my_app', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      otherwise({  templateUrl: 'starter.html' });
  }]);
