// var bgImg = document.querySelector('#bg-image');
// var mainContainer = document.querySelector('#title-container');
// mainContainer.style.background = "url('" + bgImg.getAttribute("src") + "') no-repeat top/contain"; 
// bgImg.parentNode.removeChild(bgImg);

// Menu

$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());

  $(".slides").slick({
    arrows: false,
    dots: true
  });
});
