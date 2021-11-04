import anime from 'animejs/lib/anime.es.js';
console.log(window.g_Mode);
// loader options
$(document).ready(function () {

   // appearing
   setTimeout(function(){

      $('.loader').addClass('is-hidden');

      // functionality
      $('.intro__action').click(function () {
         // dinozavr udali menya
         window.g_Mode = $(this).attr('data-mode');

         setTimeout(function(){
            $('.intro').addClass('is-hidden');
            $('html').css('overflow-y', 'auto');
            window.scrollTo(0, 0);
         }, 1)
      })
   }, 1700);
})