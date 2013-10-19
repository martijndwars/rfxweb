define([
    'angular',
    'controllers',

    'angularRoute',
    'angularSocketIo',
    ], function (angular, controllers) {
        'use strict';

        var app = angular.module('myApp', [
            'ngRoute',
            'myApp.controllers',
            'btford.socket-io'
        ]);

        return app;
    }
);