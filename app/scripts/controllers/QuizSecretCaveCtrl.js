'use strict';

angular.module('dwarvesOfArcadiaQuizApp')
  .controller('QuizSecretCaveCtrl', function ($scope, $window, quizProcessor) {
    $scope.processBrave = function() {
      quizProcessor.addBrave();
      console.log('brave', quizProcessor.brave());

      $window.location = '/#/quiz/Treasure';
    };

    $scope.processBusiness = function() {
      quizProcessor.addBusiness();
      console.log('business', quizProcessor.business());

      $window.location = '/#/quiz/Treasure';
    };

    $scope.processReligious = function() {
      quizProcessor.addReligious();
      console.log('religious', quizProcessor.religious());

      $window.location = '/#/quiz/Treasure';
    };

    $scope.processIntelligent = function() {
      quizProcessor.addIntelligent();
      console.log('intelligent', quizProcessor.intelligent());

      $window.location = '/#/quiz/Treasure';
    };

  });