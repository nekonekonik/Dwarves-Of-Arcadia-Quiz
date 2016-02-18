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

      var descriptions = {};
      descriptions.brave = "Vala Gravel-Axe -The Brave\nCourageous, phsyical, over-the-top - dwarves of this type are known for being brave in the face of danger. They will NEVER back down from a fight. Despite their barbaric appearance, they are also sensitive creatures who are fiercely loyal. Mess with them or their families, and you will never see another Arcadian sunrise.\nFOR ARCADIA~~~!!!";
      descriptions.business = "Tiernan Jewelbreaker - The Industrious\nIndustrious, ambitious and calculative - dwarves of this type are known for being shrewd businessmen. Possessing the gift of gab, unsuspecting (or inexperienced) barters always find themselves walking away with an empty gold bag, and a handful of smelly rotten fish (what even made you think that it was a tasty bag of sashimi?)\nAnd that fish shall be 500 shrillings, darling~";
      descriptions.religious = "Albanwr Chip-Moon - The Religious\nInnocent, peace-loving and happy - you can never find fault with dwarves of this type. Holding strong faith, they find hope even in the bleakest moments. They like spending time spinning in circles on huge green pastures under the sun. Human adventurers thought that it may be a ritual of some sort (probably a tribute to their Sun God); but in actual fact, they just like spinning.\nAh~ The sky is beautiful today!";
      descriptions.intelligent = "Kinnat Bismuthsmith - The Intelligent\nIntelligent, inquisitive and introspective - dwarves of this type are the smartest in Arcadia. Every technological advancements and buildings that sprawl the city of Arcadia are inventions of these great builders. They enjoy nothing but an intelligent discussion about philosophy, Arts and the Sciences (and how stupid the other dwarves are).\nWitness my next greatest invention! MUAHAHA!";

      $scope.result = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].personality; 
      $scope.dwarfType = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].dwarfType; 
      $scope.resultDescription = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].resultDescription;  
      $scope.quote = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].quote;
      ga("send", "event", $scope.result);

      $scope.shareToFB = function(){
        FB.ui({
          method: 'feed',
          link: 'https://doa-testing.herokuapp.com/#/en-us/',
          description: 'Your dwarf personality:',
          picture: 'assets/images/' + $scope.result + ".png",
          caption: descriptions[$scope.result],
        }, function(response){});
      };
    }

    initialize();
  });