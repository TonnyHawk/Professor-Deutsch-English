$(document).ready(function () {
   $('.tab__name').click(function () {
      $('.tab__name').each(function () {
         $(this).removeClass('is-active');
      })
      $(this).addClass('is-active');

      let tabName = $(this).find('.tab__name-text').text().toLowerCase();
      $('.tab__body').each(function () {
         let attr = $(this).attr('data-name');
         if (attr == tabName) {
            $(this).addClass('is-visible')
            $('#courses .tab').readmore({
               num: 2
            });
         } else {
            $(this).removeClass('is-visible')
         }
      })
   })

   $(window).resize(function(){
      $('#courses .tab').each(function(){
         $(this).readmore({
            num: 2
         });
      })
   })

   // courses readmore
   setTimeout(function () {
      $('#courses .tab').readmore({
         num: 2
      });
   }, 500)
})
