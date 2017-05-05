app.directive('validateBill', function() {
    return {
        restrict: 'EA',
        scope: {callback: '&'},
        template: "<button>Valider</button>",
        controller: function ($scope) {
            $scope.checkBill = function () {
                $scope.callback();
            };
        }
    };
});