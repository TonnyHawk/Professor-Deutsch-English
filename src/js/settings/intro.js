import anime from 'animejs/lib/anime.es.js';

// loader options
$(document).ready(function () {

   // appearing
   setTimeout(function(){

      $('.loader').addClass('is-hidden');

      // functionality
      $('.intro__action').click(function () {
         // dinozavr udali menya
         var g_Mode = $(this).attr('data-mode');
         if(g_Mode === 'g'){
            console.log('hiding E');
            $('[data-selector="tab-german"]').show()
            $('[data-selector="tab-english"]').hide();
         } else{
            console.log('hiding G');
            $('[data-selector="tab-english"]').show();
            $('[data-selector="tab-german"]').hide()
         }


         // $('[data-intro="'+g_Mode+'"').each(function(){
         //    $(this).addClass('is-active');
         // })
         setTimeout(function(){
            $('.intro').addClass('is-hidden');
            $('html').css('overflow-y', 'auto');
            window.scrollTo(0, 0);
         }, 1)
      })
   }, 1700);
})