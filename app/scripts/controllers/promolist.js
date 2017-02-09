'use strict';

/**
 * @ngdoc function
 * @name contraApp.controller:PromoListCtrl
 * @description
 * # AboutCtrl
 * Controller of the contraApp
 */
angular.module('contraApp')
.controller('PromolistCtrl', function($scope) {
    $scope.isPromoListActive = true;
	$scope.status = {
	    open: true
  	};

    $scope.myData = [{promo_id : "10011", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10012", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10013", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10014", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10015", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10016", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10017", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10018", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10019", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10010", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"}
                    ];

    $scope.gridOptions = { 
        data: 'myData',
        enableCellSelection: true,
        enableRowSelection: true,
        enableCellEditOnFocus: true,
        columnDefs: [{field: 'promo_id', displayName: 'Prod.Id', minWidth:150}, 
                     {field:'promo_title', displayName:'POR Title', minWidth:150},
                     {field:'gbu', displayName:'BU', minWidth:150},
                     {field:'fyq', displayName:'FYQ', minWidth:120},
                     {field:'status', displayName:'Status', minWidth:120},
                     {field:'last_modified', displayName:'Last Modified', minWidth:120},
                     {field:'approvol_status', displayName:'Approval Status', minWidth:120},
                     {field:'owner', displayName:'Owner', minWidth:200},
                     {field:'owner', displayName:'Owner', minWidth:200}                     
                    ]
    };

});

