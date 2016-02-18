'use strict';

/**
 * @ngdoc overview
 * @name dwarvesOfArcadiaQuizApp
 * @description
 * # dwarvesOfArcadiaQuizApp
 *
 * Main module of the application.
 */
angular
  .module('dwarvesOfArcadiaQuizApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-google-analytics'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      // })
      // .when('/quiz/Adventure', {
      //   templateUrl: 'views/quiz/adventure.html',
      //   controller: 'QuizAdventureCtrl',
      // })
      // .when('/quiz/Hostile-Dwarf', {
      //   templateUrl: 'views/quiz/hostile_dwarf.html',
      //   controller: 'QuizHostileDwarfCtrl',
      // })
      // .when('/quiz/Cave-Entrance', {
      //   templateUrl: 'views/quiz/cave_entrance.html',
      //   controller: 'QuizCaveEntranceCtrl',
      // })
      // .when('/quiz/Secret-Cave', {
      //   templateUrl: 'views/quiz/secret_cave.html',
      //   controller: 'QuizSecretCaveCtrl',
      // })
      // .when('/quiz/Treasure', {
      //   templateUrl: 'views/quiz/treasure.html',
      //   controller: 'QuizTreasureCtrl',
      // })
      // .when('/quiz/The-Calling', {
      //   templateUrl: 'views/quiz/the_calling.html',
      //   controller: 'QuizResultCtrl',
      // })

      // en-us
      .when('/en-us', {
        templateUrl: 'views/en-us/main.html',
        controller: 'MainCtrl',
      })
      .when('/en-us/quiz/Adventure', {
        templateUrl: 'views/en-us/quiz/adventure.html',
        controller: 'QuizAdventureCtrl',
      })
      .when('/en-us/quiz/Hostile-Dwarf', {
        templateUrl: 'views/en-us/quiz/hostile_dwarf.html',
        controller: 'QuizHostileDwarfCtrl',
      })
      .when('/en-us/quiz/Cave-Entrance', {
        templateUrl: 'views/en-us/quiz/cave_entrance.html',
        controller: 'QuizCaveEntranceCtrl',
      })
      .when('/en-us/quiz/Secret-Cave', {
        templateUrl: 'views/en-us/quiz/secret_cave.html',
        controller: 'QuizSecretCaveCtrl',
      })
      .when('/en-us/quiz/Treasure', {
        templateUrl: 'views/en-us/quiz/treasure.html',
        controller: 'QuizTreasureCtrl',
      })
      .when('/en-us/quiz/The-Calling', {
        templateUrl: 'views/en-us/quiz/the_calling.html',
        controller: 'QuizResultCtrl',
      })

      // zh-CN
      .when('/zh-CN', {
        templateUrl: 'views/zh-CN/main.html',
        controller: 'MainCtrl',
      })
      .when('/zh-CN/quiz/Adventure', {
        templateUrl: 'views/zh-CN/quiz/adventure.html',
        controller: 'QuizAdventureCtrl',
      })
      .when('/zh-CN/quiz/Hostile-Dwarf', {
        templateUrl: 'views/zh-CN/quiz/hostile_dwarf.html',
        controller: 'QuizHostileDwarfCtrl',
      })
      .when('/zh-CN/quiz/Cave-Entrance', {
        templateUrl: 'views/zh-CN/quiz/cave_entrance.html',
        controller: 'QuizCaveEntranceCtrl',
      })
      .when('/zh-CN/quiz/Secret-Cave', {
        templateUrl: 'views/zh-CN/quiz/secret_cave.html',
        controller: 'QuizSecretCaveCtrl',
      })
      .when('/zh-CN/quiz/Treasure', {
        templateUrl: 'views/zh-CN/quiz/treasure.html',
        controller: 'QuizTreasureCtrl',
      })
      .when('/zh-CN/quiz/The-Calling', {
        templateUrl: 'views/zh-CN/quiz/the_calling.html',
        controller: 'QuizResultCtrl',
      })

      // zh-TW
      .when('/zh-TW', {
        templateUrl: 'views/zh-TW/main.html',
        controller: 'MainCtrl',
      })
      .when('/zh-TW/quiz/Adventure', {
        templateUrl: 'views/zh-TW/quiz/adventure.html',
        controller: 'QuizAdventureCtrl',
      })
      .when('/zh-TW/quiz/Hostile-Dwarf', {
        templateUrl: 'views/zh-TW/quiz/hostile_dwarf.html',
        controller: 'QuizHostileDwarfCtrl',
      })
      .when('/zh-TW/quiz/Cave-Entrance', {
        templateUrl: 'views/zh-TW/quiz/cave_entrance.html',
        controller: 'QuizCaveEntranceCtrl',
      })
      .when('/zh-TW/quiz/Secret-Cave', {
        templateUrl: 'views/zh-TW/quiz/secret_cave.html',
        controller: 'QuizSecretCaveCtrl',
      })
      .when('/zh-TW/quiz/Treasure', {
        templateUrl: 'views/zh-TW/quiz/treasure.html',
        controller: 'QuizTreasureCtrl',
      })
      .when('/zh-TW/quiz/The-Calling', {
        templateUrl: 'views/zh-TW/quiz/the_calling.html',
        controller: 'QuizResultCtrl',
      })


      .otherwise({
        redirectTo: '/en-us'
      });
  });
