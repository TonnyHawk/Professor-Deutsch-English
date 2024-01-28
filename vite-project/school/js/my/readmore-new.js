export function cutter(str, lenght){
   let result = str.substr(0, lenght);
   if(result[result.lenght - 1] === ''){
      do{
         result = result.substr(0, result.lenght - 1);
      }while(result[result.lenght - 1] === '')
   }
   return result += '...';
}

