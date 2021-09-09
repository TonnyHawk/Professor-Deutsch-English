let btns = [
   '#students .btn',
   '#courses *[data-action="see-books"]',
   '#teachers *[data-action="see-certificates"]',
]

btns.forEach(elem=>{
   $(elem).click(function(){
      $('#page-books').fadeIn();
   })
})