'use strict';

/**
 * @ngdoc function
 * @name contraApp.controller:PromoListCtrl
 * @description
 * # AboutCtrl
 * Controller of the contraApp
 */
angular.module('contraApp')
.controller('PromoapprovalCtrl', function($scope) {
    $scope.isPromoApprovalActive = true;
	$scope.status = {
	    open: true
  	};


});

