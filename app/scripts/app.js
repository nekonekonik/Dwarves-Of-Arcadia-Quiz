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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/quiz/Adventure', {
        templateUrl: 'views/quiz/adventure.html',
        controller: 'QuizAdventureCtrl',
      })
      .when('/quiz/Hostile-Dwarf', {
        templateUrl: 'views/quiz/hostile_dwarf.html',
        controller: 'QuizHostileDwarfCtrl',
      })
      .when('/quiz/Cave-Entrance', {
        templateUrl: 'views/quiz/cave_entrance.html',
        controller: 'QuizCaveEntranceCtrl',
      })
      .when('/quiz/Secret-Cave', {
        templateUrl: 'views/quiz/secret_cave.html',
        controller: 'QuizSecretCaveCtrl',
      })
      .when('/quiz/Treasure', {
        templateUrl: 'views/quiz/treasure.html',
        controller: 'QuizTreasureCtrl',
      })
      .when('/quiz/The-Calling', {
        templateUrl: 'views/quiz/the_calling.html',
        controller: 'QuizResultCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
