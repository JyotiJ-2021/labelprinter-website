$(document).ready(function(){
		
		$(".filterbtn1").addClass("active");

		function removeAllClass(){
			$('.filterbtn1, .filterbtn2, .filterbtn3, .filterbtn4, .filterbtn5, .filterbtn6, .filterbtn7, .filterbtn8, .filterbtn9, .filterbtn10, .filterbtn11').removeClass("active");
			}
			
			$(".filterbtn1").click(function(){
				removeAllClass();
				$('.filterbtn1').addClass("active");
				$(".filterbtndiv1").show();	
				$(".filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11").hide();
			});
			
			$(".filterbtn2").click(function(){
				removeAllClass();
				$('.filterbtn2').addClass("active");
				$(".filterbtndiv2").show();	
				$(".filterbtndiv1, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11").hide();
			});
			
			$(".filterbtn3").click(function(){
				removeAllClass();
				$('.filterbtn3').addClass("active");
				$(".filterbtndiv3").show();	
				$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11").hide();
			});
			
			$(".filterbtn4").click(function(){
				removeAllClass();
				$('.filterbtn4').addClass("active");
				$(".filterbtndiv4").show();	
				$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11").hide();
			});
			
			$(".filterbtn5").click(function(){
				removeAllClass();
				$('.filterbtn5').addClass("active");
				$(".filterbtndiv5").show();	
				$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11").hide();
			});
			
			$(".filterbtn6").click(function(){
				removeAllClass();
				$('.filterbtn6').addClass("active");
				$(".filterbtndiv6").show();	
				$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11").hide();
			});
			
			$(".filterbtn7").click(function(){
				removeAllClass();
				$('.filterbtn7').addClass("active");
				$(".filterbtndiv7").show();	
				$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11").hide();
			});
			
			$(".filterbtn8").click(function(){
				removeAllClass();
				$('.filterbtn8').addClass("active");
				$(".filterbtndiv8").show();	
				$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv9, .filterbtndiv10, .filterbtndiv11").hide();
			});
			
			$(".filterbtn9").click(function(){
				removeAllClass();
				$('.filterbtn9').addClass("active");
				$(".filterbtndiv9").show();	
				$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv10, .filterbtndiv11").hide();
			});
			
			$(".filterbtn10").click(function(){
				removeAllClass();
				$('.filterbtn10').addClass("active");
				$(".filterbtndiv10").show();	
				$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv11").hide();
			});
			
			$(".filterbtn11").click(function(){
				removeAllClass();
				$('.filterbtn11').addClass("active");
				$(".filterbtndiv11").show();	
				$(".filterbtndiv1, .filterbtndiv2, .filterbtndiv3, .filterbtndiv4, .filterbtndiv5, .filterbtndiv6, .filterbtndiv7, .filterbtndiv8, .filterbtndiv9, .filterbtndiv10").hide();
			});

        });