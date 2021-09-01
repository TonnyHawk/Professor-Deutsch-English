import anime from 'animejs/lib/anime.es.js';

// loader options
$(document).ready(function () {
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
   // anime({
   //    targets: $('.intro__screen')[0],
   //    top: 0,
   //    duration: 500,
   //    delay: 500,
   //    easing
   //  });
   //  anime({
   //    targets: $('.intro__screen')[1],
   //    top: 0,
   //    duration: 500,
   //    delay: 500,
   //    easing
   //  });
})