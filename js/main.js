$(function(){
	$('.header__btn-menu').on('click', function(){
		$('.menu ul').slideToggle();
	})

	$('.footer__title-contacts').on('click', function(){
		$('.footer__contact').slideToggle();
	})

	$('.footer__title-company').on('click', function(){
		$('.footer__menu').slideToggle();
	})

	$('.footer__title-others').on('click', function(){
		$('.footer__others').slideToggle();
	})

	$('.footer__title-newsletter').on('click', function(){
		$('.footer__subscribe').slideToggle();
	})
})
