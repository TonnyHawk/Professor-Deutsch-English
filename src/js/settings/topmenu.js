let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function () {
   // hiding menu on scroll down
   let currentScrollPos = window.pageYOffset;
   if (prevScrollPos > currentScrollPos) {
      $(".nav").removeClass('hide');
   } else {
      $(".nav").addClass('hide');
   }

   prevScrollPos = currentScrollPos;
   // end

   if (window.pageYOffset > 0) {
      $('.nav').addClass('is-sticked')
   } else {
      if ($('.nav').hasClass('is-sticked')) {
         $('.nav').removeClass('is-sticked')
      }
   }
})