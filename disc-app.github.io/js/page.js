var handled = false;
$(document).on("click touchstart", ".colapse-menu", function(e){
	if(handled == false){
		handled = true;
		
		var show = $(".navigation > .container > div").eq(1).is(":visible");
		
		if(show == false){
			$(".navigation > .container > div").eq(1).slideDown();
		}else{
			$(".navigation > .container > div").eq(1).slideUp();
		}
		
		setTimeout(function(){
			handled = false;
		}, 200);
	}	
});
