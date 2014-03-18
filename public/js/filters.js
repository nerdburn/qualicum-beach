// make a filter for testing
appFilters.filter('sayHello', function() {
    return function(name) {
        return 'Hello ' + name + '!';
    };
});