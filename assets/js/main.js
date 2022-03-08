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

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 5));
    }
}


///

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}