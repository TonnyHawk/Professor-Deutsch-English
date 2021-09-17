import React, { Component } from 'react';

class BooksGallery extends Component {
   render() {
      const { student, mode, funcs, ...props } = this.props;

      let winTitle; 
      if(mode === 'cert'){
         winTitle = 'Сертифікати'
      } else{
         winTitle = 'Навчальні матеріали'
      }

      console.log(student);
      let items = student.certificates.map(elem=>{
         let title = elem.name;
         let photo = elem.file;
         return (
            <div class="gall__item gall-item" onClick={()=>{funcs.toggleGallery('zoom', true, photo)}}>
            <div class="gall-item__photo">
               <img src={photo} alt="" class="gall-item__img"/>
            </div>
            <p class="gall-item__title">{title}</p>
         </div>
         )
      })
      return (
         <div class="page" id="page-books">
         <div class="page__inner">
            <div class="page__hd">
               <p class="page__title">{winTitle}</p>
               <div class="page__icon page__icon--left page__close-icon" onClick={()=>{funcs.toggleGallery('cert', false)}}>
                  <i class="bi bi-arrow-left"></i>
               </div>
            </div>
            <div class="page__bd">
               <div class="gall gall--books">
                  <div class="gall__inner">
                     <div class="gall__hd">
                        <div class="gall__filters">
                           <p class="gall__filter is-active bg-active-main">Всі</p>
                           <p class="gall__filter bg-active-eng">English</p>
                           <p class="gall__filter bg-active-deu">Deutsch</p>
                        </div>
                     </div>
                     <div class="gall__bd">
                        {items}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      );
   }
}

export default BooksGallery;