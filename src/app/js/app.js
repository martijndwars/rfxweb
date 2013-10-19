define([
    'angular',
    'controllers',
    'angularRoute',
    ], function (angular, controllers) {
        'use strict';

        return angular.module('myApp', [
            'ngRoute',
            'myApp.controllers',
        ]);
});