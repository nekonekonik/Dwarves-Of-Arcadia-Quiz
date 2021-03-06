'use strict';

angular.module('dwarvesOfArcadiaQuizApp')
  .controller('QuizSecretCaveCtrl', function ($scope, $window, quizProcessor) {
    $scope.processBrave = function() {
      quizProcessor.addBrave();
      console.log('brave', quizProcessor.brave());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Treasure';
      ga('send', 'event', '4 secret cave - brave');
    };

    $scope.processBusiness = function() {
      quizProcessor.addBusiness();
      console.log('business', quizProcessor.business());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Treasure';
      ga('send', 'event', '4 secret cave - business');
    };

    $scope.processReligious = function() {
      quizProcessor.addReligious();
      console.log('religious', quizProcessor.religious());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Treasure';
      ga('send', 'event', '4 secret cave - religious');
    };

    $scope.processIntelligent = function() {
      quizProcessor.addIntelligent();
      console.log('intelligent', quizProcessor.intelligent());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Treasure';
      ga('send', 'event', '4 secret cave - intelligent');
    };

  });