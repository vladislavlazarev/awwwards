$(document).ready(function() {

	let random = Math.floor(Math.random() * (7 - 1) + 1);

	$('.section-main').css({
		'background-image': 'url(./assets/images/bg' + random + '.jpg)'

	});
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