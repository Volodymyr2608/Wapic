let parentElement  = document.querySelector('.footer__content');

function show(){
	let target = event.target; 
	let arr_cls = target.className.split(' ');
	
	if (arr_cls.includes('footer__title-other', 0)){
		target.classList.toggle('open')
	} 

}

parentElement.addEventListener('click', show)
