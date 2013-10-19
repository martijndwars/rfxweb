define(['angular'], function (angular) {
    'use strict';
    
    angular.module('myApp.services', [])
        .service('device', function () {
            var devices = [];

            this.add = function (device) {
                devices.push(device);
            };

            this.devices = function () {
                return devices;
            };
        })
        .service('notify', function () {
            var msgs = [];

            this.add = function (msg) {
                console.log('Pushed new message');
                msgs.push(msg);
            };

            this.msgs = function () {
                return msgs;
            };
        });
});