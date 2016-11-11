'use strict';

/**
 * @ngdoc function
 * @name kishkaApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the kishkaApp
 */
angular.module('kishkaApp')
  .controller('ArticlesCtrl', ['pages',function (carousel_pages) {
        var vm = this;
        vm.items = [];
        carousel_pages.getCarouselPages().then(function(response) {
            vm.items = response.data;
            console.log(vm.items);
        });

  }]);
