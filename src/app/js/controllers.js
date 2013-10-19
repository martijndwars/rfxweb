define(['angular'], function (angular) {
    'use strict';

    return angular.module('myApp.controllers', [])
        .controller('MyCtrl1', ['$scope', function ($scope) {
            $scope.scopedAppVersion = '1.0.0';
        }])
});