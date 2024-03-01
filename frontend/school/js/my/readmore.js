(function ($) {

   $.fn.readmore = function (options) {

      $(this).find('.has-readmore').each(function () { // choosing a block
         let paragraphsLenght = 0;
         let paragraphs = $(this).find('p'); // elements inside our main one
         let croppedHeight = 0; // how tall well be an element when we crop it to those 'lenght' num of paragraphs
         $(paragraphs).each(element => { // counting the number of p elements inside our block
            paragraphsLenght++
         });
         if (paragraphsLenght > options.num) { // we don't need to crop anything when there is less elements in our block then we want to leave anyway
            for (let i = 0; i < options.num; i++) { // counting the height of our block after cutting other elements besides this 'lenght' num of elemnts
               croppedHeight += $(paragraphs).eq(i).outerHeight() + parseInt($(paragraphs).eq(i).css('margin-bottom'));
            }
            $(this).css({
               'height': croppedHeight,
               'overflow': 'hidden'
            });

            // if there is read-more buttons already and we want to refresh them
            if ($(this).parent().find('.read-more').length !== 0) {
               $(this).parent().find('.read-more').each(function () {
                  $(this).remove();
               })
            }

            // adding buttons 'more' and 'less'
            $(this).parent().append( // adding a button 'more'
               '<div class="info-block__read-more read-more read-more_more"><p class="read-more__text">Читати більше</p><div class="read-more__icon"><i class="bi bi-chevron-down"></i></div></div>'
            )
            $(this).parent().find('.read-more_more').click(function () {
               let blockHeight = 0;
               $(paragraphs).each(
                  function () { // block height is the sum of height of all paragraphs
                     // blockHeight += $(this).height()
                     blockHeight += $(this).outerHeight() + parseInt($(this).css('margin-bottom'))
                  })
               $(this).parent().find('.has-readmore').animate({
                  'height': blockHeight
               });
               // hiding 'more' showing 'less' button
               $(this).parent().find('.read-more_less').css('display', 'flex');
               $(this).css('display', 'none');
            });
            $(this).parent().append( // adding a button 'less'
               '<div class="info-block__read-more read-more read-more_less" style="display: none;"><p class="read-more__text">Приховати</p><div class="read-more__icon"><i class="bi bi-chevron-up"></i></div></div>'
            )
            $(this).parent().find('.read-more_less').click(function () {
               
               // window scrolling instructions
               let toScreenTop = $(this)[0].getBoundingClientRect().top
               let scrollCoord = $(this).parent().find('.has-readmore').offset().top + croppedHeight - toScreenTop;
               $('html, body').animate({scrollTop: scrollCoord}, 400);

               // elemnt cropping animation
               $(this).parent().find('.has-readmore').animate({
                  'height': croppedHeight
               }, 400);
               
               // hiding 'less' showing 'more' button 
               $(this).css('display', 'none');
               $(this).parent().find('.read-more_more').css('display', 'flex');
            });

         }


      })
   };

}(jQuery));