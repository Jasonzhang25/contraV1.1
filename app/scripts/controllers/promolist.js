'use strict';

/**
 * @ngdoc function
 * @name contraApp.controller:PromoListCtrl
 * @description
 * # AboutCtrl
 * Controller of the contraApp
 */
angular.module('contraApp')
.controller('PromoListCtrl', function($scope) {
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

    $scope.filterBtn = false;
    $scope.filterPanel = true;


    $scope.clickFn = function(item) {
        switch(item){
            case 'filter' :
                //email
                $scope.emailBtn = true;
                $scope.emailPanel = false;
                //filter
                $scope.filterBtn = false;
                $scope.filterPanel = true;

                break;
            case 'filter-close' :
                //email
                $scope.emailBtn = true;
                $scope.emailPanel = false;
                //filter
                $scope.filterBtn = true;
                $scope.filterPanel = false;

                break;
            break;
            default : //nothing 
        }
    }

    $scope.myData1 = [{Sequence_ID : "1", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "2", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "3", Approval_Group_Name: "Group1", Approve_Group_Type: "Any", approver: "wen.zhang3@hpe.com", status: "Pending"},
                    {Sequence_ID : "4", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"}

                    ];

    $scope.gridOptions1 = { 
        data: 'myData1',
        enableCellSelection: true,
        enableRowSelection: true,
        enableCellEditOnFocus: true,
        columnDefs: [{field: 'reason_code', displayName: 'Reason Code', enableCellEdit: true}, 
                     {field:'promo_type', displayName:'Promo Type', enableCellEdit: true},
                     {field:'business_segement', displayName:'Business Segement', enableCellEdit: true},
                     {field:'product_number', displayName:'Product Number', enableCellEdit: true},
                     {field:'description', displayName:'Description', enableCellEdit: true},
                     {field:'pl', displayName:'PL', enableCellEdit: true, width: 500},
                     {field:'country', displayName:'Country', enableCellEdit: true},
                     {field:'region', displayName:'Region', enableCellEdit: true},
                     {field:'avg_list_price', displayName:'Avg List Price', enableCellEdit: true},
                     {field:'std_discount', displayName:'STD List Price', enableCellEdit: true},
                     {field:'ndp', displayName:'NDP', enableCellEdit: true}
                    ]
    };



    $scope.approverData = [{Sequence_ID : "1", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "2", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "3", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "4", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1"}

                    ];

    $scope.gridOptions2 = { 
        data: 'approverData',
        enableCellSelection: true,
        enableRowSelection: true,
        enableCellEditOnFocus: true,
        columnDefs: [{field: 'reason_code', displayName: 'Reason Code', enableCellEdit: true}, 
                     {field:'promo_type', displayName:'Promo Type', enableCellEdit: true},
                    ]
    };
    
});

