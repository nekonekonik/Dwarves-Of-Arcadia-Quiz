'use strict';

angular.module('dwarvesOfArcadiaQuizApp')
  .controller('QuizCaveEntranceCtrl', function ($scope, $window, quizProcessor) {
    $scope.processBrave = function() {
      quizProcessor.addBrave();
      console.log('brave', quizProcessor.brave());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Secret-Cave';
      ga('send', 'event', '3 cave entrance - brave');
    };

    $scope.processBusiness = function() {
      quizProcessor.addBusiness();
      console.log('business', quizProcessor.business());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Secret-Cave';
      ga('send', 'event', '3 cave entrance - business');
    };

    $scope.processReligious = function() {
      quizProcessor.addReligious();
      console.log('religious', quizProcessor.religious());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Secret-Cave';
      ga('send', 'event', '3 cave entrance - religious');
    };

    $scope.processIntelligent = function() {
      quizProcessor.addIntelligent();
      console.log('intelligent', quizProcessor.intelligent());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Secret-Cave';
      ga('send', 'event', '3 cave entrance - intelligent');
    };

  });