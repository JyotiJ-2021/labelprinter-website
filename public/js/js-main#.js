(function($){'use strict';jQuery(document).ready(function($){
	
var trandingslider=$('.trandingslider');
var image_carousel=$('.image_carousel');
var product_carousel=$('.product_carousel');
																																																																																																																																																																																																																																																				   
image_carousel.owlCarousel({loop:true,nav:true,dots:true,margin:30,items:1,navText:["<i class=\'fal fa-angle-left\'></i>","<i class=\'fal fa-angle-right\'></i>"],})
product_carousel.owlCarousel({loop:false,nav:true,dots:false,margin:25,items:4,navText:["<i class=\'slideArrLeft\'></i>","<i class=\'slideArrRight\'></i>"],})

trandingslider.owlCarousel({
//stagePadding: 50,
loop:false,
nav:false,
dot:true,
margin:10,
navText:["<i class=\'fal fa-angle-left\'></i>","<i class=\'fal fa-angle-right\'></i>"],

responsive:{0:{items:2},
600:{items:2},
1200:{items:2}}})

});}

(jQuery));



$(document).on('click','.mobile-menu-icon',function(e){

	e.preventDefault();

	$('.mobile-menu-popup').show();
	$('.menu-cover').show();

});

$(document).on('click','.mclose',function(e){

	e.preventDefault();

	$('.mobile-menu-popup').hide();
	$('.menu-cover').hide();

});


//PRODUCT LISTING
$(document).on('click','.comrare-btton',function(){
	$('.compareBtnFixed').hide();
	$('.compareProMiniView').show();
	$('.compare-bg').show();

});
$(document).on('click','.compare-details',function(){
	$('.compareProMiniView').hide();
	$('.compare-bg').hide();
	$('.compareview').show();
});

$(document).on('click','.compareClear',function(e){
	$('.compareview').hide();
	$('.compareBtnFixed').fadeIn("fast");
});
$(document).on('click','.compare-cls',function(e){
	$('.compare-bg').hide();
	$('.compareProMiniView').hide();
	$('.compareBtnFixed').fadeIn("fast");
});


$(document).on('click','.sortby',function(e){
	$('.sort-by-bg').show();
	$('.sort-by-cover').show();
});

$(document).on('click','.sort-by-bg',function(e){
	$('.sort-by-bg').hide();
	$('.sort-by-cover').hide();
});


/*Mobile Filter*/
$( ".heading" ).click(function() {
	$(this).next('.accordiondiv').slideToggle("slow");
	$(this).toggleClass("headingactive");
});

$( ".filterbut" ).click(function() {
	$('.filterMobPanel').fadeIn("fast");
	$('.filterbut').fadeOut("fast");
	$('body').css("overflow","hidden");
});

$( ".filterclosebut" ).click(function() {
	$('.filterMobPanel').fadeOut("fast");
	$('.filterbut').fadeIn("fast");
	$('body').css("overflow","auto");
});


/*COMPARE SIMILAR PRODUCT POPUP*/
$(document).on('click','.comp-popup',function(e){
	$('.sort-by-bg').hide();
	$('.sort-by-cover').hide();
});
/*END COMPARE SIMILAR PRODUCT POPUP*/

/*COOKIES*/
// On ready
document.addEventListener("DOMContentLoaded", function() {
  
  // Create cookie function
  function createCookie(name, value, days) {
      var expires;
      if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000));
          expires = "; expires="+date.toGMTString();
      }
      else {
          expires = "";
      }
      document.cookie = name+"="+value+expires+"; path=/";
  }

  // Reading cookies function
  function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
              c = c.substring(1,c.length);
          }
          if (c.indexOf(nameEQ) === 0) {
              return c.substring(nameEQ.length,c.length);
          }
      }
      return null;
  }
  
  // Selectors
 
  
	
  
  
});
/*END COOKIES*/

/*PRODUCT DETAILS*/
/*$(document).ready(function() {
	$(".gallery").magnificPopup({
		delegate: "a",
		type: "image",
		tLoading: "Loading image #%curr%...",
		mainClass: "mfp-img-mobile",
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});
});*/

/*END PRODUCT DETAILS*/






$(document).ready(function(){
		
$(".filterbtn1").addClass("active");

function removeAllClass(){
	$('.filterbtn1, .filterbtn2, .filterbtn3, .filterbtn4, .filterbtn5, .filterbtn6, .filterbtn7, .filterbtn8, .filterbtn9, .filterbtn10, .filterbtn11, .filterbtn12, .filterbtn13, .filterbtn14, .filterbtn15, .filterbtn16, .filterbtn17').removeClass("active");
	}
	
	$(".filterbtn1").click(function(){
		removeAllClass();
		$('.filterbtn1').addClass("active");
		$(".filterbtndiv1").show();	
		$(".filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn2").click(function(){
		removeAllClass();
		$('.filterbtn2').addClass("active");
		$(".filterbtndiv2").show();	
		$(".filterbtndiv1, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn3").click(function(){
		removeAllClass();
		$('.filterbtn3').addClass("active");
		$(".filterbtndiv3").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn4").click(function(){
		removeAllClass();
		$('.filterbtn4').addClass("active");
		$(".filterbtndiv4").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn5").click(function(){
		removeAllClass();
		$('.filterbtn5').addClass("active");
		$(".filterbtndiv5").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn6").click(function(){
		removeAllClass();
		$('.filterbtn6').addClass("active");
		$(".filterbtndiv6").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn7").click(function(){
		removeAllClass();
		$('.filterbtn7').addClass("active");
		$(".filterbtndiv7").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn8").click(function(){
		removeAllClass();
		$('.filterbtn8').addClass("active");
		$(".filterbtndiv8").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn9").click(function(){
		removeAllClass();
		$('.filterbtn9').addClass("active");
		$(".filterbtndiv9").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	
	
	
	
	$(".filterbtn10").click(function(){
		removeAllClass();
		$('.filterbtn10').addClass("active");
		$(".filterbtndiv10").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn11").click(function(){
		removeAllClass();
		$('.filterbtn11').addClass("active");
		$(".filterbtndiv11").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn12").click(function(){
		removeAllClass();
		$('.filterbtn12').addClass("active");
		$(".filterbtndiv12").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn13").click(function(){
		removeAllClass();
		$('.filterbtn13').addClass("active");
		$(".filterbtndiv13").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn14").click(function(){
		removeAllClass();
		$('.filterbtn14').addClass("active");
		$(".filterbtndiv14").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv15, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn15").click(function(){
		removeAllClass();
		$('.filterbtn15').addClass("active");
		$(".filterbtndiv15").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv16, .filterbtndiv17").hide();
	});
	
	$(".filterbtn16").click(function(){
		removeAllClass();
		$('.filterbtn16').addClass("active");
		$(".filterbtndiv16").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv17").hide();
	});
	
	$(".filterbtn17").click(function(){
		removeAllClass();
		$('.filterbtn17').addClass("active");
		$(".filterbtndiv17").show();	
		$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11, .filterbtndiv12, .filterbtndiv13, .filterbtndiv14, .filterbtndiv15, .filterbtndiv16").hide();
	});
	
	

});
/*End Mobile Filter*/
