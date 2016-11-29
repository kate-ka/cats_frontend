'use strict';

/**
 * @ngdoc function
 * @name kishkaApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the kishkaApp
 */
angular.module('kishkaApp')
  .controller('MainPageCtrl', ['pages', '$http', '$cookies', function (pages, $http, $cookies) {
        var vm = this;
        vm.carouselArticles = [];
        vm.articles = [];

        vm.poll = {};
        // Vote will contain choice and poll (ids)
        vm.vote = {};
        vm.hasVoted = $cookies.get('hasVoted') || false;
        vm.showStats = false;
        vm.chartData = [];
        vm.total = 0;

        pages.getCarouselPages().then(function(response) {
            vm.carouselArticles = response.data;

        });

        pages.getPages().then(function(response) {
            vm.articles = response.data;
        });

        pages.getPolls().then(function(response) {

            vm.poll = response.data;
            vm.vote.poll = vm.poll.id;

        });

        vm.submitVote = function() {
            return $http.post('http://127.0.0.1:8000/api-v1/votes/', vm.vote).then(function(response){
                $cookies.put('hasVoted', true);
                vm.hasVoted = true;
            });

        };

        vm.viewResults = function() {
            vm.getChartData();

            return vm.showStats = true;
        };
        vm.getVotesSum = function(data) {
            var total = 0;
            _.each(data, function(item) {
                total += item.results;
                vm.total = total

            });
            return total
        };
        vm.getChartData = function() {
            pages.getVotesResults().then(function(response) {
                var choices = response.data.choices;
                var total = vm.getVotesSum(choices);
                _.each(choices, function(choice) {
                    var percentage = Math.round(choice.results * 100 / total);
                    var barWidth = Math.round(percentage / 100 * 200);
                    var chartItem = {
                        'text': choice.text,
                        'results': choice.results,
                        'width': barWidth,
                        'percentage': percentage
                    };

                    vm.chartData.push(chartItem);

                });

         });
        }

  }]);
