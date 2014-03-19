$(document).ready(function(){

  // set all events to same vertical height
  $('.events li').heightMatch();
  $('.faq .answer').heightMatch();
  $('.links li').heightMatch();
  $('.news li').heightMatch();

  // watch for less than 960 and make mobile nav available
  $(window).resize(function(){
    var nav = $('nav.mobile');
    var width = $(this).width();
    if(width >= 960)
      nav.hide();
  });
  
  // toggle mobile nav on click
  $('.menu-icon').click(function(e) {
    e.preventDefault();
    $('nav.mobile').toggle();
  });
  
});

/*
  jquery plugin to find tallest element and
  make all elements in collection the same height
*/
$.fn.heightMatch = function() {
  var i = this;
  var iHeight = i.first().height();
  i.each(function(){
    var h = $(this).height();
    if(h > iHeight)
      iHeight = h;
  });
  i.height(iHeight);
};