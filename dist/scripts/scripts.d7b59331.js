"use strict";angular.module("dwarvesOfArcadiaQuizApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","angular-google-analytics"]).config(["$routeProvider",function(a){a.when("/en-us",{templateUrl:"views/en-us/main.html",controller:"MainCtrl"}).when("/en-us/quiz/Adventure",{templateUrl:"views/en-us/quiz/adventure.html",controller:"QuizAdventureCtrl"}).when("/en-us/quiz/Hostile-Dwarf",{templateUrl:"views/en-us/quiz/hostile_dwarf.html",controller:"QuizHostileDwarfCtrl"}).when("/en-us/quiz/Cave-Entrance",{templateUrl:"views/en-us/quiz/cave_entrance.html",controller:"QuizCaveEntranceCtrl"}).when("/en-us/quiz/Secret-Cave",{templateUrl:"views/en-us/quiz/secret_cave.html",controller:"QuizSecretCaveCtrl"}).when("/en-us/quiz/Treasure",{templateUrl:"views/en-us/quiz/treasure.html",controller:"QuizTreasureCtrl"}).when("/en-us/quiz/The-Calling",{templateUrl:"views/en-us/quiz/the_calling.html",controller:"QuizResultCtrl"}).when("/zh-CN",{templateUrl:"views/zh-CN/main.html",controller:"MainCtrl"}).when("/zh-CN/quiz/Adventure",{templateUrl:"views/zh-CN/quiz/adventure.html",controller:"QuizAdventureCtrl"}).when("/zh-CN/quiz/Hostile-Dwarf",{templateUrl:"views/zh-CN/quiz/hostile_dwarf.html",controller:"QuizHostileDwarfCtrl"}).when("/zh-CN/quiz/Cave-Entrance",{templateUrl:"views/zh-CN/quiz/cave_entrance.html",controller:"QuizCaveEntranceCtrl"}).when("/zh-CN/quiz/Secret-Cave",{templateUrl:"views/zh-CN/quiz/secret_cave.html",controller:"QuizSecretCaveCtrl"}).when("/zh-CN/quiz/Treasure",{templateUrl:"views/zh-CN/quiz/treasure.html",controller:"QuizTreasureCtrl"}).when("/zh-CN/quiz/The-Calling",{templateUrl:"views/zh-CN/quiz/the_calling.html",controller:"QuizResultCtrl"}).when("/zh-TW",{templateUrl:"views/zh-TW/main.html",controller:"MainCtrl"}).when("/zh-TW/quiz/Adventure",{templateUrl:"views/zh-TW/quiz/adventure.html",controller:"QuizAdventureCtrl"}).when("/zh-TW/quiz/Hostile-Dwarf",{templateUrl:"views/zh-TW/quiz/hostile_dwarf.html",controller:"QuizHostileDwarfCtrl"}).when("/zh-TW/quiz/Cave-Entrance",{templateUrl:"views/zh-TW/quiz/cave_entrance.html",controller:"QuizCaveEntranceCtrl"}).when("/zh-TW/quiz/Secret-Cave",{templateUrl:"views/zh-TW/quiz/secret_cave.html",controller:"QuizSecretCaveCtrl"}).when("/zh-TW/quiz/Treasure",{templateUrl:"views/zh-TW/quiz/treasure.html",controller:"QuizTreasureCtrl"}).when("/zh-TW/quiz/The-Calling",{templateUrl:"views/zh-TW/quiz/the_calling.html",controller:"QuizResultCtrl"}).otherwise({redirectTo:"/en-us"})}]),angular.module("dwarvesOfArcadiaQuizApp").controller("MainCtrl",["$scope","$window","quizProcessor",function(a,b,c){a.setLocale=function(a){c.setLocale(a)},a.quizStart=function(){b.location="/#/"+c.locale()+"/quiz/Adventure"}}]),angular.module("dwarvesOfArcadiaQuizApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("dwarvesOfArcadiaQuizApp").controller("QuizAdventureCtrl",["$scope","$window","quizProcessor",function(a,b,c){a.processBrave=function(){c.addBrave(),console.log("brave",c.brave()),b.location="/#/"+c.locale()+"/quiz/Hostile-Dwarf"},a.processBusiness=function(){c.addBusiness(),console.log("business",c.business()),b.location="/#/"+c.locale()+"/quiz/Hostile-Dwarf"},a.processReligious=function(){c.addReligious(),console.log("religious",c.religious()),b.location="/#/"+c.locale()+"/quiz/Hostile-Dwarf"},a.processIntelligent=function(){c.addIntelligent(),console.log("intelligent",c.intelligent()),b.location="/#/"+c.locale()+"/quiz/Hostile-Dwarf"}}]),angular.module("dwarvesOfArcadiaQuizApp").controller("QuizHostileDwarfCtrl",["$scope","$window","quizProcessor",function(a,b,c){a.processBrave=function(){c.addBrave(),console.log("brave",c.brave()),b.location="/#/"+c.locale()+"/quiz/Cave-Entrance"},a.processBusiness=function(){c.addBusiness(),console.log("business",c.business()),b.location="/#/"+c.locale()+"/quiz/Cave-Entrance"},a.processReligious=function(){c.addReligious(),console.log("religious",c.religious()),b.location="/#/"+c.locale()+"/quiz/Cave-Entrance"},a.processIntelligent=function(){c.addIntelligent(),console.log("intelligent",c.intelligent()),b.location="/#/"+c.locale()+"/quiz/Cave-Entrance"}}]),angular.module("dwarvesOfArcadiaQuizApp").controller("QuizCaveEntranceCtrl",["$scope","$window","quizProcessor",function(a,b,c){a.processBrave=function(){c.addBrave(),console.log("brave",c.brave()),b.location="/#/"+c.locale()+"/quiz/Secret-Cave"},a.processBusiness=function(){c.addBusiness(),console.log("business",c.business()),b.location="/#/"+c.locale()+"/quiz/Secret-Cave"},a.processReligious=function(){c.addReligious(),console.log("religious",c.religious()),b.location="/#/"+c.locale()+"/quiz/Secret-Cave"},a.processIntelligent=function(){c.addIntelligent(),console.log("intelligent",c.intelligent()),b.location="/#/"+c.locale()+"/quiz/Secret-Cave"}}]),angular.module("dwarvesOfArcadiaQuizApp").controller("QuizSecretCaveCtrl",["$scope","$window","quizProcessor",function(a,b,c){a.processBrave=function(){c.addBrave(),console.log("brave",c.brave()),b.location="/#/"+c.locale()+"/quiz/Treasure"},a.processBusiness=function(){c.addBusiness(),console.log("business",c.business()),b.location="/#/"+c.locale()+"/quiz/Treasure"},a.processReligious=function(){c.addReligious(),console.log("religious",c.religious()),b.location="/#/"+c.locale()+"/quiz/Treasure"},a.processIntelligent=function(){c.addIntelligent(),console.log("intelligent",c.intelligent()),b.location="/#/"+c.locale()+"/quiz/Treasure"}}]),angular.module("dwarvesOfArcadiaQuizApp").controller("QuizTreasureCtrl",["$scope","$window","quizProcessor",function(a,b,c){a.processBrave=function(){c.addBrave(),console.log("brave",c.brave()),b.location="/#/"+c.locale()+"/quiz/The-Calling"},a.processBusiness=function(){c.addBusiness(),console.log("business",c.business()),b.location="/#/"+c.locale()+"/quiz/The-Calling"},a.processReligious=function(){c.addReligious(),console.log("religious",c.religious()),b.location="/#/"+c.locale()+"/quiz/The-Calling"},a.processIntelligent=function(){c.addIntelligent(),console.log("intelligent",c.intelligent()),b.location="/#/"+c.locale()+"/quiz/The-Calling"}}]),angular.module("dwarvesOfArcadiaQuizApp").controller("QuizResultCtrl",["$scope","quizProcessor",function(a,b){function c(){var c=[{personality:"brave",value:b.brave()},{personality:"business",value:b.business()},{personality:"religious",value:b.religious()},{personality:"intelligent",value:b.intelligent()}],d={};d.brave="Vala Gravel-Axe -The Brave\nCourageous, phsyical, over-the-top - dwarves of this type are known for being brave in the face of danger. They will NEVER back down from a fight. Despite their barbaric appearance, they are also sensitive creatures who are fiercely loyal. Mess with them or their families, and you will never see another Arcadian sunrise.\nFOR ARCADIA~~~!!!",d.business="Tiernan Jewelbreaker - The Industrious\nIndustrious, ambitious and calculative - dwarves of this type are known for being shrewd businessmen. Possessing the gift of gab, unsuspecting (or inexperienced) barters always find themselves walking away with an empty gold bag, and a handful of smelly rotten fish (what even made you think that it was a tasty bag of sashimi?)\nAnd that fish shall be 500 shrillings, darling~",d.religious="Albanwr Chip-Moon - The Religious\nInnocent, peace-loving and happy - you can never find fault with dwarves of this type. Holding strong faith, they find hope even in the bleakest moments. They like spending time spinning in circles on huge green pastures under the sun. Human adventurers thought that it may be a ritual of some sort (probably a tribute to their Sun God); but in actual fact, they just like spinning.\nAh~ The sky is beautiful today!",d.intelligent="Kinnat Bismuthsmith - The Intelligent\nIntelligent, inquisitive and introspective - dwarves of this type are the smartest in Arcadia. Every technological advancements and buildings that sprawl the city of Arcadia are inventions of these great builders. They enjoy nothing but an intelligent discussion about philosophy, Arts and the Sciences (and how stupid the other dwarves are).\nWitness my next greatest invention! MUAHAHA!",a.result=c.slice(0).sort(function(a,b){return b.value-a.value})[0].personality,a.dwarfType=c.slice(0).sort(function(a,b){return b.value-a.value})[0].dwarfType,a.resultDescription=c.slice(0).sort(function(a,b){return b.value-a.value})[0].resultDescription,a.quote=c.slice(0).sort(function(a,b){return b.value-a.value})[0].quote,ga("send","event",a.result),a.shareToFB=function(){FB.ui({method:"feed",link:"http://localhost:5000/",picture:"http://localhost:5000/assets/images/"+a.result+"-share.png",description:d[a.result]},function(a){})}}c()}]),angular.module("dwarvesOfArcadiaQuizApp").service("quizProcessor",function(){var a=0,b=0,c=0,d=0,e="";this.brave=function(){return a},this.business=function(){return b},this.religious=function(){return c},this.intelligent=function(){return d},this.locale=function(){return e},this.addBrave=function(){a+=1},this.addBusiness=function(){b+=1},this.addReligious=function(){c+=1},this.addIntelligent=function(){d+=1},this.setLocale=function(a){e=a}}),angular.module("dwarvesOfArcadiaQuizApp").run(["$templateCache",function(a){a.put("views/en-us/main.html",'<div class="jumbotron"> <h1>What is your Dwarf Personality?</h1> <button ng-click="setLocale(\'en-us\'); quizStart()">Start the Quiz</button> </div>'),a.put("views/main/about.html","<p>This is the about view.</p>"),a.put("views/main/main.html",'<div class="jumbotron"> <h3>Select the localization:</h3> <a href="en_us/">English (USA)</a><br> <a href="zh_CN/">Chinese (Simplified)</a><br> <a href="zh_TW/">Chinese (Traditional)</a> <h1>What is your Dwarf Personality?</h1> <button ng-click="quizStart()">Start the Quiz</button> </div>'),a.put("views/zh-CN/main.html",'<div class="jumbotron"> <h1>小测试：穿越到中土世界，你是哪种类型的小矮人</h1> <button ng-click="setLocale(\'zh-CN\'); quizStart()">开始</button> </div>'),a.put("views/zh-TW/main.html",'<div class="jumbotron"> <h1>小測試：穿越到中土世界，你是哪種類型的小矮人</h1> <button ng-click="setLocale(\'zh-TW\'); quizStart()">開始</button> </div>')}]);