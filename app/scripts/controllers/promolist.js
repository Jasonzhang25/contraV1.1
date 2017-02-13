'use strict';

/**
 * @ngdoc function
 * @name contraApp.controller:PromoListCtrl
 * @description
 * # AboutCtrl
 * Controller of the contraApp
 */
angular.module('contraApp')
.controller('PromolistCtrl', function($scope,$http) {
    $scope.isPromoListActive = true;
	$scope.status = {
	    open: true
  	};

    $http.get('data/promolist.json').then(function(result){
        $scope.promolistPayload = result.data;
        alert(JSON.stringify(result));
        console.log(result);
    }
    );

/*
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
*/
    $scope.gridOptions = { 
        data: 'promolistPayload',
        enableCellSelection: true,
        enableRowSelection: true,
        enableCellEditOnFocus: true,
        columnDefs: [{field: 'id', displayName: 'Prod.Id', minWidth:150}, 
                     {field:'title', displayName:'POR Title', minWidth:150},
                     {field:'bu', displayName:'BU', minWidth:150},
                     {field:'fyq', displayName:'FYQ', minWidth:120},
                     {field:'status', displayName:'Status', minWidth:120},
                     {field:'lastmodify', displayName:'Last Modified', minWidth:120},
                     {field:'approvalstatus', displayName:'Approval Status', minWidth:120},
                     {field:'owner', displayName:'Owner', minWidth:200},
                     {field:'email', displayName:'Owner', minWidth:200}                     
                    ]
    };

});

