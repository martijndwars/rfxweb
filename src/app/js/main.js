require.config({
    paths: {
        angular: '../../ext/angular/angular',
        angularRoute: '../../ext/angular-route/angular-route'
    },
    baseUrl: 'app/js',
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
    },
    priority: [
        "angular"
    ]
});

// hey Angular, we're bootstrapping manually!
window.name = "NG_DEFER_BOOTSTRAP!";

require([
    'angular',
    'app',
    'routes'
], function(angular, app, routes) {
    'use strict';
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        $html.addClass('ng-app');
        angular.bootstrap($html, [app['name']]);
    });
});