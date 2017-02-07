'use strict';

/**
 * @ngdoc directive
 * @name contraApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('contraApp')
	.directive("leftmenuDirective", function() {
	    return {
	        restrict : "AE",
	        templateUrl: "scripts/directives/leftmenu/leftmenu.html",
	        replace: true
	    };
	});