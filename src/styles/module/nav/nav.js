$(document).ready(function(){
   function Nav(id){
      this.id = "#"+id;
      this.itemsOnBreakpoint = [];
      this.ifExpandMenuHasAClickListener = false;


      this.transportItem = (item)=>{ // transports last menu-item to expand menu
         let elNum;
         if(item == 'last'){
            elNum = $(this.id+" .nav__menu-item").length - 1;
         }
         else if(typeof item == 'number'){
            elNum = item - 1;
         }
         let elem = $(this.id+" .nav__menu-item").eq(elNum).clone().removeClass().addClass('nav__menu-item_expand');
         $(this.id+" .nav__menu-item").eq(elNum).remove();
         $(this.id+" .nav__expand-menu").append(elem);
      };

      this.getNumOfItem = (place) => {
         if(place == 'menu'){
            return $(this.id+' .nav__menu-item').length;
         }
      };

      this.setItemsOnBreakpoint = (num, breakpoint) => {
         this.itemsOnBreakpoint.push({
            items: num,
            breakpoint: breakpoint
         });
      }

      this.adaptize = () => {
         let defineBreakpoint = () => {// chose a breakpoint from breakpoints list
            let breakpoints = [];
            for(i = 0; i < this.itemsOnBreakpoint.length; i++){
               breakpoints.push(this.itemsOnBreakpoint[i].breakpoint);
            }

            let diffs = [];
            let winWidth = $(window).width();
            for(i = 0; i < breakpoints.length; i++){
               diffs[i] = breakpoints[i] - winWidth;
            }

            let maxDiff = diffs[0];
            for(i = 0; i < breakpoints.length; i++){
               if(diffs[i] > maxDiff){
                  maxDiff = diffs[i];
               }
            }

            let minDiff = maxDiff;
            let iterator = null;
            for(i = 0; i < breakpoints.length; i++){
               if(diffs[i] <= minDiff){
                  if(diffs[i] > 0){
                     minDiff = diffs[i];
                     iterator = i;
                  }
               }
            }
            if(iterator != null){
               return breakpoints[iterator];
            }
            else{
               return null;
            }
         };

         if(defineBreakpoint() != null){ // if we have a breakpoint

            let numOfVisible = (breakpoint) => { // returns the number of items that should be visible in the menu
               for(i = 0; i < this.itemsOnBreakpoint.length; i++){
                  if(this.itemsOnBreakpoint[i].breakpoint == breakpoint){
                     return this.itemsOnBreakpoint[i].items;
                  }
               }
            };
   
            let areVisible = numOfVisible(defineBreakpoint()); // how many items should be visible

            if(areVisible != null){
               this.createExpand();

               let allItems = this.getNumOfItem('menu');
               let diff = allItems - areVisible; // how many items should be replaced to the expand tab
               for(i = 0; i < diff; i++){
                  this.transportItem(allItems - diff + 1);
               }
            }
         }

      }

      this.createExpand = () =>{
         $(this.id+" .nav__menu").append("<div class='nav__expand'></div>");
         $(this.id+" .nav__expand").append("<div class='nav__expand-btn show'></div>");
         for(let i = 0; i < 3; i++){
            $(this.id+" .nav__expand-btn").append('<span></span>');
         }
         $(this.id+" .nav__expand").append("<div class='nav__expand-menu'></div>");

         this.AddClickFunctionality();
      };

      this.AddClickFunctionality = (elName) =>{ // adding a click functionality to buttons
         let navId = this.id; 
         let ifExpandMenuHasAClickListener = this.ifExpandMenuHasAClickListener;

         $(this.id+" .nav__btn").click(function(){
            $(navId).toggleClass('nav_is-open');
            $(navId+" .hamburger").toggleClass("is-active");
         });

         $(this.id+" .nav__expand-btn").click(function(){
            // $(navId+" .nav__expand-menu").toggleClass('show');
            $(navId+" .nav__expand-menu").fadeToggle('fast');

            if(!ifExpandMenuHasAClickListener){
               $(this.id+" .nav__menu-item_expand .nav__link").click(function(){ // this item is not exist when the page is loaded that's why i add this handler after this item apears on the page.
                  $(navId+" .nav__expand-menu").fadeToggle('fast');
               })
               ifExpandMenuHasAClickListener = true;
            }
         });

         $(this.id+" .nav__menu-item").click(function(){
            $(this.id+" .nav__menu-item").each(function(){
               $(this).removeClass('is-active');
            })
            $(this).addClass('is-active');
         });

      };

      this.AddClickFunctionality();
   }

      let topmenu = new Nav('topmenu');
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
         topmenu.setItemsOnBreakpoint(3, 1200);
      } else{
         topmenu.setItemsOnBreakpoint(4, 1200);
      }
      topmenu.setItemsOnBreakpoint(null, 992);
      topmenu.adaptize();

});