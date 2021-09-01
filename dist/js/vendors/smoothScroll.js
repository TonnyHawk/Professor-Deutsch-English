//smooth scroling for the anchor links
$(document).ready(function(){
	let doc_h = $(window).height();
	let percents = 10; //distance from element to top after scroll (in percents)

	//style for the mobile devices
	//
	// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
	// 	percents = 7;
	// }

	$('[data-target^="#"]').click(function(){
		//Сохраняем значение атрибута href в переменной:
		let target = $(this).attr('data-target');
		let scrollCoord;
		if(target === '#'){
			scrollCoord = 0;
		}else{
			scrollCoord = $(target).offset().top - percents*doc_h/100;
		}
		$('html, body').animate({scrollTop: scrollCoord}, 400);
		return false;
	});
});