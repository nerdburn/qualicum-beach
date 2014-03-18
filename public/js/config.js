// set up routes
app.config(['$routeProvider', function($routeProvider) {
    
    // index
    $routeProvider.when('/', {
        templateUrl: '/report-weekly.html',
        controller: this.reportsCtrl
    });
    
    // weekly report
    $routeProvider.when('/reports/weekly', {
        templateUrl: '/report-weekly.html',
        controller: this.reportsCtrl
    });    

    // go to index route otherwise
    $routeProvider.otherwise({
        redirectsTo: '/reports/weekly'
    });
    
}]);

// run on all routes
app.run(function($rootScope, $location, appGlobal) {

    // get global size data
    $rootScope.sizes = appGlobal.sizes();
    
    $rootScope.$on('$locationChangeSuccess', function(ev, data) {   
        $(window).scrollTop(0);
    });
});