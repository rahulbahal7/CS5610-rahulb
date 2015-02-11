$(document).ready(function(){	
	$("#fade").css("height", $(document).height());
	$(".alert").click(function(){
		$("#fade").fadeIn();
		return false;
	});	
	$(".close").click(function(){
		$("#fade").fadeOut();
		return false;
	});	
});
