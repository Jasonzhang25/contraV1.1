'use strict';

/**
 * @ngdoc function
 * @name contraApp.controller:PromoListCtrl
 * @description
 * # AboutCtrl
 * Controller of the contraApp
 */
angular.module('contraApp')
.controller('NewpromoCtrl', function($scope) {
    $scope.isNewPromoActive = true;
	$scope.status = {
	    open: true
  	};


});

