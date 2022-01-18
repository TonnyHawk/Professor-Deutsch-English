// require('./vendors/jQuery-Input-Mask-Phone-Numbers/jquery-input-mask-phone-number.min.js');

// require('./vendors/smoothScroll.js');
import smoothScroll from './vendors/smoothScroll';
$(document).ready(smoothScroll)

// phone mask
// require('./settings/masks');

const MenuSpy = require('menuspy');
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
}, 500)