let globals = {
   // serverUrl: "https://testproj-328917.appspot.com"
   serverUrl: "http://127.0.0.1:3000",
   // serverUrl: "http://91.219.61.167:3000",
   domain: 'http://localhost:8081/'
}

export function ibg(){
   $.each($('.ibg'), function(index, val) {
      if($(this).find('img').length>0){
         $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
      }
   });
}

export default globals;