'use strict';

angular.module('dwarvesOfArcadiaQuizApp')
  .controller('QuizTreasureCtrl', function ($scope, $window, quizProcessor) {
    $scope.processBrave = function() {
      quizProcessor.addBrave();
      console.log('brave', quizProcessor.brave());

      $window.location = '/#/quiz/The-Calling';
    };

    $scope.processBusiness = function() {
      quizProcessor.addBusiness();
      console.log('business', quizProcessor.business());

      $window.location = '/#/quiz/The-Calling';
    };

    $scope.processReligious = function() {
      quizProcessor.addReligious();
      console.log('religious', quizProcessor.religious());

      $window.location = '/#/quiz/The-Calling';
    };

    $scope.processIntelligent = function() {
      quizProcessor.addIntelligent();
      console.log('intelligent', quizProcessor.intelligent());

      $window.location = '/#/quiz/The-Calling';
    };

  });