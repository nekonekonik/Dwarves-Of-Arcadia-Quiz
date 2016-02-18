'use strict';

angular.module('dwarvesOfArcadiaQuizApp')
  .controller('QuizResultCtrl', function ($scope, quizProcessor) {
    function initialize() {
      var results = [
        { personality: 'brave', value: quizProcessor.brave() }, 
        { personality: 'business', value: quizProcessor.business() }, 
        { personality: 'religious', value: quizProcessor.religious() }, 
        { personality: 'intelligent', value: quizProcessor.intelligent() }
      ];

      $scope.result = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].personality; 
      $scope.dwarfType = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].dwarfType; 
      $scope.resultDescription = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].resultDescription;  
      $scope.quote = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].quote;
      ga("send", "event", $scope.result);
    }

    initialize();
  });