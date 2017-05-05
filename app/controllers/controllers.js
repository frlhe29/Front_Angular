var MyFirstController = function($scope, $http, userData) {
  $scope.ManyHellos = ['Hello', 'Hola', 'Bonjour', 'Guten Tag', 'Ciao', 'Namaste', 'Yiasou'];

  $scope.data = userData.billOne;


  $scope.validateBill = function () {
      $scope.data.status = !$scope.data.status;
  };

  var onError = function(reason) {
    $scope.error = "Ooops, something went wrong..";
  };
};

app.controller("MyFirstController", MyFirstController);