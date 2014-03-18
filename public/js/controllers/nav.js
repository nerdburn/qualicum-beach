/*
    NAV
*/
app.controller('navCtrl', ['$scope', 'appModal', '$rootScope', function($scope, appModal, $rootScope) {
    console.log('nav controller initiated');     
    
/*    
    // create and show login modal
    $scope.showLogin = function() {
        var loginModal = exModal.create('/login.html', {
            modalId: 'login-modal',
            modalClass: 'login-modal',
            controller: 'loginController',
            backdrop: true
        });
    }
*/
        
    // do jquery stuff for header
    angular.element(document).ready(function() {
/*        
        var header = angular.element('header');
        var filter = angular.element('.filter');
        var height = header.height();
        var delay = 100;
        var lastScrollTop = 0;
        var delta = 5;
        
        // hide header on scroll
        angular.element(window).scroll(function(event){
            var st = $(this).scrollTop();

            // if last position is less than current position do nothing
            if(Math.abs(lastScrollTop - st) <= delta)
                return;

            // scroll down
            if (st > lastScrollTop && st > 20){
                header.stop().animate({ top: -(height)+'px' }, delay);
                filter.stop().animate({ top: 0 }, delay);

            // scroll up
            } else {
                header.stop().animate({ top: 0 }, delay);
                filter.stop().animate({ top: height +'px' }, delay);
            }
                                    
            lastScrollTop = st;
        });
*/
        
    });
            
}]);
