define(['angular', 'app'], function(angular, app) {
    'use strict';

    app.config(function($routeProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'app/partials/dashboard.html',
            controller: 'DashboardCtrl'
        }).when('/device/add', {
            templateUrl: 'app/partials/devices/add.html',
            controller: 'DevicesCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });
    });
});