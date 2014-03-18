/*
    ACTIVE
    - sets an active class on a link if the route matches
*/
appDirectives.directive('appActive', function($location) {
    return function(scope, element, attrs) {
        console.log('route: ' + attrs.appActive);
        console.log('path: ' + $location.path());
        scope.location = $location;
        scope.$watch('location.path()', function(newPath) {
            if(attrs.appActive === newPath) {
                element.addClass('active');
            } else {
                element.removeClass('active');
            }
        });        
    }
});

/*
    IS LOGGED IN
    - shows or hides an element based on logged in status
*/
appDirectives.directive('appIsLoggedIn', function() {
    return function(scope, element, attrs) {
        var prevDisp = element.css('display');
        var loggedin = false;
        
        if(loggedin) {
            if(attrs.exIsLoggedIn === 'false')
                element.css('display', 'none');
            else
                element.css('display', prevDisp);
        }
        else if(!loggedin) {
            if(attrs.exIsLoggedIn === 'false')
                element.css('display', prevDisp);
            else
                element.css('display', 'none');            
        }
    }
});
