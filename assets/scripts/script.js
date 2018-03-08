$(document).ready(function() {

	let random = Math.floor(Math.random() * (7 - 1) + 1);
	$('.section-main').css({
		'background-image': 'url(./assets/images/bg' + random + '.jpg)'
	});

	let modalToggler = $('.js-modal-toggler'),
		modal = $('.modal'),
		headerMobile = $('.header-mobile'),
		modalElems = [
		'.js-modal-github',
		'.js-modal-vk',
		'.js-modal-mail',
		'.modal-map',
		'.modal-toggler'
		];
	$(".mobile-toggler").click(function(){
		modal.removeClass('-active')
		for (let i = 0; i < modalElems.length; i++) {
				let timeToWait = i * 200;
				setTimeout(function() {
				$(modalElems[i]).removeClass('-active');
			}, 200 + timeToWait);
		}		
		
	
	});
		$(".js-modal-toggler").click(function(){
		headerMobile.removeClass('-is-open')
	});
		$(".js-modal-toggler").click(function(){
		$('.mobile-toggler i').removeClass('-cross')
	});



	$(".mobile-toggler").click(function(){
		headerMobile.toggleClass('-is-open')
	});
	$(".mobile-toggler").click(function(){
		headerMobile.removeClass('-active')

	});
	$(".mobile-toggler").click(function(){
		$('.mobile-info i').toggleClass('-active')
	});

	$(".mobile-toggler").click(function(){
		$('.mobile-toggler i').toggleClass('-cross');
	});
	$(".mobile-toggler").click(function(){
		$('.modal-map').removeClass('-active')
	});
	$(".mobile-toggler").click(function(){
		$('.modal-info').removeClass('-active')
	});

		setTimeout(function(){
		$(".-from-above").addClass("-animated");
		$(".-from-bottom").addClass("-animated");
	}, 800);

	modalToggler.click(function(){
		modal.toggleClass('-active')
		for (let i=0; i < modalElems.length; i++) {
		let timeToWait = i*200;

		setTimeout(function(){
			$(modalElems[i]).toggleClass('-active');
		}, 200 + timeToWait);
	}
	});

});