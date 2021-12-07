$('[data-action="open-popup"]').each(function () {
   $(this).click(function () {

      $('#popup-application').addClass('is-visible');

      let applicationTo = g_Mode + ' ' + $(this).parents('.tab__body').attr('data-name');
      $('#popup-application .field__select[name="application-to"] option').each(function () {
         if ($(this).attr('value') === applicationTo) {
            $(this).attr('selected', '')
         } else {
            $(this).removeAttr('selected')
         }
      })
   })
})
$('[data-action="close-popup"]').each(function () {
   $(this).click(function () {
      $('#popup-application').removeClass('is-visible');
   })
})