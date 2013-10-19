define(['angular', 'app'], function(angular, app) {
    'use strict';

    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'app/partials/partial1.html',
            controller: 'MyCtrl1'
        });
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);

});