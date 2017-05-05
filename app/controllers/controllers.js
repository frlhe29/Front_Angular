var BillChecker = function($scope, billData) {
    $scope.data = billData.billOne;
    $scope.checkBill = function(){
        alert("Im here");
      //  $scope.data.status = !$scope.data.status;
    };
};

app.controller("BillChecker",BillChecker);