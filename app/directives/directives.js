app.directive('validateBill', function() {
    return {
        restrict: 'E',
        template: "<button ng-click='validateBill()'>Valider</button>"
    };
});