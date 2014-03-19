$(document).ready(function(){

  $(window).resize(function(){
    var nav = $('nav.mobile');
    var width = $(this).width();
    if(width >= 960)
      nav.hide();
  });
  
  $('.menu-icon').click(function(e) {
    e.preventDefault();
    $('nav.mobile').toggle();
  });
  
});