'use strict';

angular.module('dwarvesOfArcadiaQuizApp')
  .controller('QuizHostileDwarfCtrl', function ($scope, $window, quizProcessor) {
    $scope.processBrave = function() {
      quizProcessor.addBrave();
      console.log('brave', quizProcessor.brave());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Cave-Entrance';
      ga('send', 'event', '2 hostile dwarf - brave');
    };

    $scope.processBusiness = function() {
      quizProcessor.addBusiness();
      console.log('business', quizProcessor.business());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Cave-Entrance';
      ga('send', 'event', '2 hostile dwarf - business');
    };

    $scope.processReligious = function() {
      quizProcessor.addReligious();
      console.log('religious', quizProcessor.religious());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Cave-Entrance';
      ga('send', 'event', '2 hostile dwarf - religious');
    };

    $scope.processIntelligent = function() {
      quizProcessor.addIntelligent();
      console.log('intelligent', quizProcessor.intelligent());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Cave-Entrance';
      ga('send', 'event', '2 hostile dwarf - intelligent');
    };

  });