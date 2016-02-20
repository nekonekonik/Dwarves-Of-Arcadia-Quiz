'use strict';

angular.module('dwarvesOfArcadiaQuizApp')
  .controller('QuizTreasureCtrl', function ($scope, $window, quizProcessor) {
    $scope.processBrave = function() {
      quizProcessor.addBrave();
      console.log('brave', quizProcessor.brave());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/The-Calling';
      ga('send', 'event', '5 secret cave - brave');
    };

    $scope.processBusiness = function() {
      quizProcessor.addBusiness();
      console.log('business', quizProcessor.business());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/The-Calling';
      ga('send', 'event', '5 secret cave - business');
    };

    $scope.processReligious = function() {
      quizProcessor.addReligious();
      console.log('religious', quizProcessor.religious());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/The-Calling';
      ga('send', 'event', '5 secret cave - religious');
    };

    $scope.processIntelligent = function() {
      quizProcessor.addIntelligent();
      console.log('intelligent', quizProcessor.intelligent());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/The-Calling';
      ga('send', 'event', '5 secret cave - intelligent');
    };

  });