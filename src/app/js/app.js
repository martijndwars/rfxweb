define([
    'angular',
    'services',
    'directives',
    'controllers',

    'angularRoute',
    'angularSocketIo',
    ], function (angular, services) {
        'use strict';

        var app = angular.module('myApp', [
            'ngRoute',
            'myApp.controllers',
            'myApp.services',
            'myApp.directives',

            'btford.socket-io'
        ]);

        app.run(function (device) {
            var devices = [{
                name: 'Wallswitch',
                code: 'A1'
            }, {
                name: 'Bedroom',
                code: 'A2'
            }];

            devices.forEach(device.add);
        });

        return app;
    }
);