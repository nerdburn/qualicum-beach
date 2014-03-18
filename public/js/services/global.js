/*
    GLOBAL SERVICE
    - returns data for use globally
*/
appServices.factory("appGlobal", ['$http', function($http) {
    
    return {
        
        sizes: function(callback) {
            
            var data = [
                { short: 10, long: '10' },
                { short: 10.5, long: '10.5' },
                { short: 11, long: '11' },
                { short: 27, long: '27' },
                { short: 28, long: '28' },
                { short: 29, long: '29' },
                { short: 30, long: '30' },
                { short: 31, long: '31' },
                { short: 32, long: '32' },
                { short: 33, long: '33' },
                { short: 34, long: '34' },
                { short: 5, long: '5' },
                { short: 6, long: '6' },
                { short: 6.5, long: '6.5' },
                { short: 7, long: '7' },
                { short: 7.5, long: '7.5' },
                { short: 8, long: '8' },
                { short: 8.5, long: '8.5' },
                { short: 9, long: '9' },
                { short: 9.5, long: '9.5' },
                { short: 'L', long: 'Large' },
                { short: 'M', long: 'Medium' },
                { short: 'S', long: 'Small' },
                { short: 'XL', long: 'Extra Large' },
                { short: 'XS', long: 'Extra Small' },
                { short: 'XXL', long: 'Extra Extra Large' },
                { short: 'XXS', long: 'Extra Extra Small' }
            ];
            
            if(typeof(callback) !== 'undefined')
                callback(data);
            else
                return data;
        }
        
        /*
        get: function(callback){
            $http.get('books.json').success(function(data) {
                callback(data);
            });
        }
        */
        
    } // end return
    
}]);