import anime from 'animejs/lib/anime.es.js';

// loader options
$(document).ready(function () {

   // appearing
   setTimeout(function(){

      $('.loader').addClass('is-hidden');
      $('.intro__screen').eq(0).css('top', '-100%');
      $('.intro__screen').eq(1).css('top', '100%');
      let easing = 'easeOutCubic';

      let tl = anime.timeline();
      
      tl.add({
         targets: $('.intro__title')[0],
         opacity: [0, 1],
         duration: 1650,
         easing,
         delay: 800
      }).add({
         targets: document.querySelectorAll('.intro__screen'),
         top: 0,
         duration: 800,
         easing
      });

      // functionality
      $('.intro__screen').click(function () {
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


         $(this).addClass('is-active');
         $('.intro__title').fadeOut();
         setTimeout(function(){
            $('.intro').addClass('is-hidden');
            $('html').css('overflow-y', 'auto');
            window.scrollTo(0, 0);
         }, 1700)
      })
   }, 1700);
})