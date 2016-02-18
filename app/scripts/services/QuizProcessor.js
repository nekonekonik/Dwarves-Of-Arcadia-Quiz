'use strict';

angular.module('dwarvesOfArcadiaQuizApp')
  .service('quizProcessor', function () {
    var _brave = 0;
    var _business = 0;
    var _religious = 0;
    var _intelligent = 0;

    var _locale = '';

    this.brave = function() { return _brave; };
    this.business = function() { return _business; };
    this.religious = function() { return _religious; };
    this.intelligent = function() { return _intelligent; };
    this.locale = function() { return _locale; };

    this.addBrave = function() {
      _brave += 1;
    };
    this.addBusiness = function() {
      _business += 1;
    };
    this.addReligious = function() {
      _religious += 1;
    };
    this.addIntelligent = function() {
      _intelligent += 1;
    };

    this.setLocale = function(locale) {
      _locale = locale;
    };
  });