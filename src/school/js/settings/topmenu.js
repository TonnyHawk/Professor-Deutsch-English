const MenuSpy = require('menuspy');

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

   if (window.pageYOffset > 0) {
      $('.nav').addClass('is-sticked')
   } else {
      if ($('.nav').hasClass('is-sticked')) {
         $('.nav').removeClass('is-sticked')
      }
   }
})
let elm = document.getElementById('topmenu');
setTimeout(()=>{
   new MenuSpy(elm,{

      // menu selector
      menuItemSelector: 'p[data-target]',
   
      // CSS class for active item
      activeClass   : 'is-active',
   
      // amount of space between your menu and the next section to be activated.
      threshold     : 15,
   
      // enable or disable browser's hash location change.
      enableLocationHash: true,
   
      // timeout to apply browser's hash location.
      hashTimeout   : 100,
   
      // called every time a new menu item activates.
      callback      : null
      
   });
}, 150)