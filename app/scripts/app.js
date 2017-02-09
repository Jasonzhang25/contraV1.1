'use strict';

/**
 * @ngdoc overview
 * @name contraApp
 * @description
 * # contraApp
 *
 * Main module of the application.
 */
angular
  .module('contraApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-loading-bar',
    'ui.bootstrap',
    'ui.grid',
    'frapontillo.bootstrap-switch'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      })
      .when('/promolist', {
        templateUrl: 'views/promolist.html',
        controller: 'PromoListCtrl',
        controllerAs: 'promoList'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'myroute'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

/*
  Jason add:
  to fix url issue.
*/
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);