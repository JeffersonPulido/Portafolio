(function($) {

	"use strict";
	
	$('.flexslider').flexslider({
		animation: "fade",
        direction: "horizontal",
        easing: "swing",
        controlNav: false,
        directionNav: true,
        prevText: "",
        nextText: "",
        start: function(slider){
          $('body').removeClass('loading');
        }
    });



    $('#Grid').mixitup({
        effects: ['fade','grayscale'],
        easing: 'snap',
        transitionSpeed: 800
    });



    $(function(){
        $('[data-rel="lightbox"]').lightbox();
    });


})(jQuery);

/* =================== BUTTON UP ========================= */
// Scroll up

$(document).ready(function(){ irArriba(); }); //Hacia arriba

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(1000); }else{ $('.ir-arriba').slideUp(1000); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}