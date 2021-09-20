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
            $(this).find('.tab__main').readmore({
               num: 3
            });
         } else {
            $(this).removeClass('is-visible')
         }
      })
   })

   // courses readmore
   setTimeout(function () {
      $('#courses .tab__main').readmore({
         num: 3
      });
   }, 500)
})
