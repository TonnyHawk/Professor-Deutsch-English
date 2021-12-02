export function sortArr(arr, filter){ // sorting arr items by 'order' property and filter value
   let newArr = []
   let ordered = []
   let unordered = []

   //splitting array on two types to avoid fails with undefined order property later
   arr.forEach(elem=>{
      if(Object.keys(elem).length > 0){
         ordered.push(elem)
      }else{
         unordered.push(elem)
      }
   })

      ordered = ordered.sort((a, b)=>{
         if(typeof a.order[filter] !== 'undefined'){
            return a.order[filter] - b.order[filter]
         }else return false;
      })

   newArr = [...ordered, ...unordered]

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

export function langFilter(items, filter, sorting=null){
   let arr = items.filter(elem=>{
      let permission = false
      elem.professor.forEach(element => {
         if(element === filter) permission = true
      });
      return permission
   })

   if(sorting === 'sort'){
      // sort array by 'order'
      if(typeof arr[0].order !== 'undefined'){
         arr = sortArr(arr, filter)
      }
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