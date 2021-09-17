import React, { Component } from 'react';

class CustomMainSlide extends Component {
   render() {
   const { student, ...props } = this.props;

   // adding lang badges
   let langBadges = [];
   if(student.languages){

      student.languages.forEach(elem=>{
         langBadges.push( (
               <div class="talk-buble__badge badge">
                  <p class="badge__main-text">{elem.name}</p>
                  <p class="badge__aside-text">{elem.lvl}</p>
               </div>
            ))
      })
   }

   // adding certificates btn
   let actionBtn = '';
   if(student.certificates.length > 0){
      actionBtn = (
         <p class="talk-buble__action btn" data-id={student.id} onClick={()=>{props.functions.showCertificates(student)}}>Сертифікати</p>
      )
   }

   // forming pocket
   let pocket = '';
   if(langBadges.length > 0){
      pocket = (
         <div class="talk-buble__pocket">
            <div class="talk-buble__badges">
               {langBadges}
            </div>
            {actionBtn}
         </div>
      )
   }

     return (
      <div class="sl__slide-unit" key={student.id}>
      <div class="sl__photo multilayer">
         <img src={student.photo} alt="" class="multilayer__main"/>
      </div>
      <div class="sl__pop talk-buble">
         <div class="talk-buble__header">
            <p class="talk-buble__title">{student.name}</p>
         </div>
        {pocket}
         <p class="talk-buble__descr">{student.about}</p>
      </div>
   </div>
     );
   }
 }

 export default CustomMainSlide;