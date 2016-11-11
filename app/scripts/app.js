'use strict';

/**
 * @ngdoc overview
 * @name kishkaApp
 * @description
 * # kishkaApp
 *
 * Main module of the application.
 */
angular
  .module('kishkaApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/car_pages.html',
                controller: 'ArticlesCtrl as articles'
            });
    } ]);
