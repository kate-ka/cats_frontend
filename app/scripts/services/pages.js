'use strict';/** * @ngdoc service * @name kishkaApp.pages * @description * # pages * Service in the kishkaApp. */angular.module('kishkaApp')  .service('pages', ['$http', function ($http) {       var vm = this;        vm.getCarouselPages = function() {            return $http.get('http://127.0.0.1:8000/api-v1/articles/');        };        vm.getPages = function() {            return $http.get('http://127.0.0.1:8000/api-v1/articles/')        };        vm.getPolls = function() {            return $http.get('http://127.0.0.1:8000/api-v1/polls/active/');        };        vm.getVotesResults = function () {            return $http.get('http://127.0.0.1:8000/api-v1/polls/1/results/')        }    }]);