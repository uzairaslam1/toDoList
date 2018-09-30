$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
});

$('input[type="text"]').on("keypress",function(event){
	if (event.which===13) {
		var newVal = $(this).val();
		$(this).val("");
		$(this).slideUp();
		$("ul").append('<li><span><i class="fas fa-trash"></i></span> ' +newVal+ '</li>');
	}
});


$(".fa-calendar-plus").on("click",function(){
	$('input[type="text"]').slideToggle(400);
});