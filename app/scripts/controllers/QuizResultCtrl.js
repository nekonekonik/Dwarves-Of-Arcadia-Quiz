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

      var descriptionsTW = {};
      descriptions.brave = "神勇武士\n勇敢，強壯，歡樂——此類型的小矮人在危險面前無所畏懼。他們永遠也不會在一場爭鬥中認輸。儘管他們外表強悍，他們卻是無比忠誠的感性生物。挑釁他們或他們的家人，你就再也看不到阿卡迪亞的日出。\n“為了阿卡迪亞～！！”";
      descriptions.business = "吸金富豪\n勤勞，上進，精明——此類型的矮人是精於世故的商人。擁有過人口才，使得與他們交易的新手常常落得錢袋空空，只能帶著一袋臭魚回家（而且他們還會讓人覺得那是一袋美味的刺身？）\n”親愛的，那魚可值500先令呢～“";
      descriptions.religious = "精神守衛\n純潔，愛好和平，快樂——這類型的矮人讓你永遠挑不出毛病。秉持著堅定的信念，他們即使在最荒涼的時刻也能找到希望。他們喜歡在陽光下的草原上轉圈，人類探險家會感到那是一種儀式（也許是敬拜他們的太陽神）。然而實際上，他們只是在轉圈而已。\n啊，天空真美啊！";
      descriptions.intelligent = "博學智者\n智慧，好奇，內省——這類矮人是阿卡迪亞最聰明的矮人。遍布阿卡迪亞城市的科技進步和宏偉建築都是這群偉大的建造者促成的。沒有神秘比討論哲學，藝術和科學（以及其他矮人多麼愚蠢）更讓他們滿足的了。\n”見證我下個最偉大的創造吧啊哈哈哈哈！“";

      $scope.result = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].personality; 
      $scope.dwarfType = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].dwarfType; 
      $scope.resultDescription = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].resultDescription;  
      $scope.quote = results.slice(0).sort(function(a, b) { return b.value - a.value; })[0].quote;
      ga("send", "event", $scope.result);

      $scope.shareToFB = function(){
        FB.ui({
          method: 'feed',
          name: 'Which dwarf personality are you?',
          link: 'https://doa-testing.herokuapp.com/',
          picture: 'https://doa-testing.herokuapp.com/assets/images/' + $scope.result + '-share.png',
          description: descriptions[$scope.result],
        }, function(response){});
      };

      $scope.shareToFBTW = function() {
        FB.ui({
          method: 'feed',
          name: 'Which dwarf personality are you?',
          link: 'https://doa-testing.herokuapp.com/',
          picture: 'https://doa-testing.herokuapp.com/assets/images/' + $scope.result + '-share.png',
          description: descriptionsTW[$scope.result],
        }, function(response){});
      };
    }

    initialize();
  });