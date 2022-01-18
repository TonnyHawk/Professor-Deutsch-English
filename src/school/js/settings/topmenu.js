let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function () {
   // hiding menu on scroll down
   let currentScrollPos = window.pageYOffset;
   // if (prevScrollPos > currentScrollPos) {
   //    $(".nav").removeClass('hide');
   // } else {
   //    $(".nav").addClass('hide');
   // }

   prevScrollPos = currentScrollPos;
   // end

   let headerBottomPos = document.querySelector('#header').getBoundingClientRect().bottom
   let topmenuHeight = document.querySelector('#topmenu').getBoundingClientRect().height

   if (window.pageYOffset > 0) {
      $('.nav').addClass('is-sticked')
   } else {
      if ($('.nav').hasClass('is-sticked')) {
         $('.nav').removeClass('is-sticked')
      }
   }

   if(headerBottomPos < topmenuHeight){
      $('.nav').addClass('scroll-modified')
   }else{
      if ($('.nav').hasClass('scroll-modified')) {
         $('.nav').removeClass('scroll-modified')
      }
   }
})