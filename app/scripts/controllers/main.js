'use strict';

/**
 * @ngdoc function
 * @name dwarvesOfArcadiaQuizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dwarvesOfArcadiaQuizApp
 */
angular.module('dwarvesOfArcadiaQuizApp')
  .controller('MainCtrl', function ($scope, $window) {
    $scope.quizStart = function() {
      $window.location = '/#/quiz/Adventure';
    };
  });
