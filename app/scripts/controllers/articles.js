'use strict';

/**
 * @ngdoc function
 * @name kishkaApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the kishkaApp
 */
angular.module('kishkaApp')
  .controller('ArticlesCtrl', ['pages',function (pages) {
        var vm = this;
        vm.items = [];
        vm.pages = []
        pages.getCarouselPages().then(function(response) {
            vm.items = response.data;

        });

        pages.getPages().then(function(response) {
            vm.pages = response.data;
        })
  }]);
