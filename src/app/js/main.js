require.config({
    paths: {
        angular: '../../ext/angular/angular',
        angularRoute: '../../ext/angular-route/angular-route',
        angularSocketIo: '../../ext/angular-socket-io/socket',
        socketIo: '/socket.io/socket.io.js',
        bootstrap: '../../ext/bootstrap/dist/js/bootstrap',
        jquery: '../../ext/jquery/jquery'
    },
    baseUrl: 'app/js',
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularSocketIo': ['angular'],
        'bootstrap': ['jquery']
    },
    priority: [
        "angular"
    ]
});

require([
    'angular',
    'bootstrap',
    'socketIo',

    'app',
    'routes'
], function(angular, bootstrap, socketIo, app, routes) {
    'use strict';

    angular.element(document).ready(function() {
        angular.bootstrap(document, [app['name']]);
    });
});