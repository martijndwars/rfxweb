define(['angular', 'services'], function(angular, services) {
    'use strict';

    angular.module('myApp.directives', ['myApp.services'])
        .directive('notify', ['$timeout', 'notify', function($timeout, notify) {
            return {
                restrict: 'E',
                replace: true,
                /*
                template: '<div class="alert alert-info">{{ msg }}</div>',
                controller: function($scope, notify) {
                    $scope.$watch(notify.msgs, function () {
                        console.log(notify.msgs());
                        $scope.msg = notify.msgs().pop();
                    }, true);
                }
                */
            };
        }]);
});