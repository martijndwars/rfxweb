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
                unit: 'A',
                device: '1'
            }, {
                name: 'Bedroom',
                unit: 'A',
                device: '2'
            }];

            devices.forEach(device.add);
        });

        return app;
    }
);