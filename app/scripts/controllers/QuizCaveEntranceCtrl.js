'use strict';

angular.module('dwarvesOfArcadiaQuizApp')
  .controller('QuizCaveEntranceCtrl', function ($scope, $window, quizProcessor) {
    $scope.process = function() {
      if ($scope.answer === 'brave') {
      	quizProcessor.addBrave();
      	console.log('brave', quizProcessor.brave());
      } else if ($scope.answer === 'business') {
      	quizProcessor.addBusiness();
      	console.log('business', quizProcessor.business());
      } else if ($scope.answer === 'religious') {
      	quizProcessor.addReligious();
      	console.log('religious', quizProcessor.religious());
      } else if ($scope.answer === 'intelligent') {
      	quizProcessor.addIntelligent();
      	console.log('intelligent', quizProcessor.intelligent());
      }

      $window.location = '/#/quiz/Secret-Cave';
    };
  });