'use strict';

angular.module('dwarvesOfArcadiaQuizApp')
  .controller('QuizResultCtrl', function ($scope, quizProcessor) {
    function initialize() {
      var results = [
        { personality: 'Vala Gravel-Axe', value: quizProcessor.brave() }, 
        { personality: 'Tiernan Jewelbreaker', value: quizProcessor.business() }, 
        { personality: 'Albanwr Chip-Moon', value: quizProcessor.religious() }, 
        { personality: 'Kinnat Bismuthsmith', value: quizProcessor.intelligent() }
      ];

      $scope.result = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].personality; 
    }

    initialize();
  });