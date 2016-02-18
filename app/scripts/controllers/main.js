'use strict';

/**
 * @ngdoc function
 * @name dwarvesOfArcadiaQuizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dwarvesOfArcadiaQuizApp
 */
angular.module('dwarvesOfArcadiaQuizApp')
  .controller('MainCtrl', function ($scope, $window, quizProcessor) {

    $scope.setLocale = function(locale) {
      quizProcessor.setLocale(locale);
    };

    $scope.quizStart = function() {
      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Adventure';
    };
  });
