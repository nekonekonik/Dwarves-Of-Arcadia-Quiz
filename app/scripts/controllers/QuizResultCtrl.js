'use strict';

angular.module('dwarvesOfArcadiaQuizApp')
  .controller('QuizResultCtrl', function ($scope, quizProcessor) {
    function initialize() {
      var results = [
        { personality: 'Vala Gravel-Axe', value: quizProcessor.brave(), dwarfType: 'brave' }, 
        { personality: 'Tiernan Jewelbreaker', value: quizProcessor.business(), dwarfType: 'business' }, 
        { personality: 'Albanwr Chip-Moon', value: quizProcessor.religious(), dwarfType: 'religious' }, 
        { personality: 'Kinnat Bismuthsmith', value: quizProcessor.intelligent(), dwarfTpye: 'intelligent' }
      ];

      $scope.result = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].personality; 
      $scope.dwarfType = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].dwarfType; 
      ga("send", "event", $scope.result);
    }

    initialize();
  });