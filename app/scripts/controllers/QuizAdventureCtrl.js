'use strict';

angular.module('dwarvesOfArcadiaQuizApp')
  .controller('QuizAdventureCtrl', function ($scope, $window, quizProcessor) {
    $scope.processBrave = function() {
      quizProcessor.addBrave();
      console.log('brave', quizProcessor.brave());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Hostile-Dwarf';
      ga('send', 'event', '1 adventure - brave');
    };

    $scope.processBusiness = function() {
      quizProcessor.addBusiness();
      console.log('business', quizProcessor.business());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Hostile-Dwarf';
      ga('send', 'event', '1 adventure - business');
    };

    $scope.processReligious = function() {
      quizProcessor.addReligious();
      console.log('religious', quizProcessor.religious());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Hostile-Dwarf';
      ga('send', 'event', '1 adventure - religious');
    };

    $scope.processIntelligent = function() {
      quizProcessor.addIntelligent();
      console.log('intelligent', quizProcessor.intelligent());

      $window.location = '/#/' + quizProcessor.locale() + '/quiz/Hostile-Dwarf';
      ga('send', 'event', '1 adventure - intelligent');
    };
  });

  