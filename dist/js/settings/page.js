function openWinPreparation(){
   document.documentElement.style = 'overflow: hidden';
}
function closeWinPreparation(){
   document.documentElement.style = 'overflow-X: hidden; overflow-Y: visible;';
}


$('.page__close-icon').click(function(){
   $('.page').fadeOut('fast');
   closeWinPreparation();
})

$("#students .section__expand-btn").click(function(){
   $('#page-photos').fadeIn('fast');
   openWinPreparation();
})