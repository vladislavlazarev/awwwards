$(document).ready(function() {
	$(".mobile-toggler").click(function(){
		$('.header-mobile').toggleClass('-is-open')
	});
	$(".mobile-toggler").click(function(){
		$('.mobile-toggler i').toggleClass('-cross');
	});
	setTimeout(function(){
		$(".-from-above").addClass("-animated");
		$(".-from-bottom").addClass("-animated");
	}, 800);
});