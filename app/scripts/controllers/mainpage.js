'use strict';

/**
 * @ngdoc function
 * @name kishkaApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the kishkaApp
 */
angular.module('kishkaApp')
  .controller('MainPageCtrl', ['pages',function (pages) {
        var vm = this;
        vm.carouselArticles = [];
        vm.articles = [];
        pages.getCarouselPages().then(function(response) {
            vm.carouselArticles = response.data;

        });

        pages.getPages().then(function(response) {
            vm.articles = response.data;
        })
  }]);
