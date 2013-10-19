define(['angular'], function (angular) {
    'use strict';

    return angular.module('myApp.controllers', [])
        .controller('DashboardCtrl', function ($scope, socket) {
            $scope.lightOn = function () {
                socket.emit('lightOn');
            }

            $scope.lightOff = function () {
                socket.emit('lightOff');
            }

            socket.on('ACK', function () {
                var alert = $('<div></div>', {
                    class: 'alert alert-info'
                }).text('Acknowledgement received');

                $('.panel-body').append(alert);

                setTimeout(function () {
                    alert.fadeOut('slow');
                }, 1000);
            });
        });
});