export function sortArr(arr, filter){ // sorting arr items by 'order' property and filter value
   let newArr = []
   let ordered = []
   let unordered = []

   // separating ordered and unordered items
   arr.forEach(elem=>{
         // if(Object.keys(elem).length > 0){
         if(typeof elem.order !== 'undefined'){
            ordered.push(elem)
         }else{
            unordered.push(elem)
         }
   })

   if(ordered.length > 0){
      // sorting an ordered list
      newArr = ordered.sort((a, b)=>{
         if(typeof a.order[filter] !== 'undefined'){
            return a.order[filter] - b.order[filter]
         }else return false;
      })
   }

   if(unordered.length > 0){
      unordered = unordered.map(elem=>{
         elem.order = {}
         return elem
      })
   }

   newArr = [...newArr, ...unordered]

   return newArr
}

export async function loadItems(collName, serverUrl, optionalQuery=''){
   let response = await fetch(serverUrl+'/'+collName+optionalQuery);
   if (response.ok) { // если HTTP-статус в диапазоне 200-299
      return response.json();
   } else {
      alert(`Ошибка подгрузки ${collName} (HTTP): ` + response.status);
      return []
   }
}

export function langFilter(items, filter){
   let arr = items
   if(items.length > 0){
      arr = items.filter(elem=>{
         let permission = false
         elem.professor.forEach(element => {
            if(element === filter) permission = true
         });
         return permission
      })

      arr = sortArr(arr, filter)
   }
   return arr
}

export function makeReqObj(){
   try{
      let req = document.location.href.split('?')[1].split('&')
      let reqObj = {}
      req.forEach(elem=>{
         elem = elem.split('=')
         reqObj[elem[0]] = elem[1]
      })
      return reqObj
   }catch{
      console.log('request string contains no properties');
      return {}
   }
}

export function linkTo(url=''){
   let reqString = document.location.href.split('#')[0]
   // console.log(reqString);
   let protocoll = reqString.split('//')[0] + '//';
   // console.log(protocoll);
   let domain = reqString.split('//')[1].split('/')[0] + '/'
   // console.log(domain);

   let newUrl = protocoll + domain + url

   // console.log(newUrl);

   document.location.href = newUrl
}

export function setPageTitle(str, mode=null){
   let title = document.title;
   switch(mode){
      case 'add':
         title = document.title + ' ' + str;
         break;
      default:
         title = str;
   }

   document.title = title;
}