'use strict';

/**
 * @ngdoc filter
 * @name contraApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the contraApp.
 */
angular.module('contraApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
