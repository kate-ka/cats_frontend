'use strict';/** * @ngdoc service * @name kishkaApp.pages * @description * # pages * Service in the kishkaApp. */angular.module('kishkaApp')  .service('pages', ['$http', function ($http) {       var vm = this;    vm.getCarouselPages = function() {        return $http.get('/extras/car_pages.json');    };        vm.getPages = function() {            return $http.get('/extras/pages.json')        }    }]);