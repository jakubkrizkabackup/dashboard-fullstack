'use strict';

angular.module('dashboardFullstackApp.auth', [
  'dashboardFullstackApp.constants',
  'dashboardFullstackApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
