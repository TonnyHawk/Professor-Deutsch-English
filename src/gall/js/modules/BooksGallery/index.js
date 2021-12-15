import React, { Component } from 'react';
import ZoomedGal from '../ZoomedGal/index';
import {linkTo} from '../../../../js/functions'

class BooksGallery extends Component {
   render() {
      const { mode, funcs, items, ...props } = this.props;

      let galItems, winTitle, galleryClass;

      if(mode === 'cert'){
         winTitle = 'Сертифікати'
         galleryClass = 'gall--books'
         // innerClass = 'page__inner--books'
         galItems = items.map(elem=>{
            let title = elem.name;
            let photo = elem.photo;
            let owner = elem.owner;
            return (
            <div class="gall__item gall-item" key={elem.id} onClick={()=>{funcs.toggleGallery('zoom', true, photo)}}>
               <div class="gall-item__photo">
                  <img src={photo} alt="" class="gall-item__img lazyload" data-src={photo}/>
               </div>
               <p class="gall-item__title">{title}</p>
               <p class="gall-item__descr">{owner}</p>
            </div>
            )
         })
      }else if(mode === 'cert-personal'){
         winTitle = 'Сертифікати'
         galleryClass = 'gall--books'
         // innerClass = 'page__inner--books'
         galItems = items.map(elem=>{
            let title = elem.name;
            let photo = elem.photo;
            // let owner = elem.owner;
            return (
            <div class="gall__item gall-item" key={elem.id} onClick={()=>{funcs.toggleGallery('zoom', true, photo)}}>
               <div class="gall-item__photo">
                  <img src={photo} alt="" class="gall-item__img lazyload" data-src={photo}/>
               </div>
               <p class="gall-item__title">{title}</p>
               {/* <p class="gall-item__descr">{owner}</p> */}
            </div>
            )
         })
      }else if(mode === 'stud'){
         winTitle = 'Галерея'
         galleryClass = 'gall--photos'
         // innerClass = 'page__inner--photos'
         galItems = items.map(elem=>{
            let title = elem.name;
            let professor = elem.professor;
            let photo = elem.photo;
            // return (
            // <div class="gall__item gall-item" key={elem.id} onClick={()=>{funcs.toggleGallery('zoom', true, elem)}}>
            //    <div class="gall-item__photo">
            //       <img src={photo} srcset={photo} alt="" class="gall-item__img lazyload" data-srcset={photo}/>
            //    </div>
            //    <p class="gall-item__title">{title}</p>
            //    <p class="gall-item__descr">Professor {professor.join(" & ")}</p>
            // </div>
            // )
            return (
               <div class="gall__item gall-item" key={elem.id} onClick={()=>{funcs.toggleGallery('zoom', true, elem)}}>
                     <img src={photo} srcset={photo} alt="" class="gall-item__img lazyload" data-srcset={photo}/>
               </div>
               )

         })
      } else if(mode === 'books'){
         winTitle = 'Навчальні матеріали'
         galleryClass = 'gall--books'
         // innerClass = 'page__inner--books'
         galItems = items.map(elem=>{
            let title = elem.name;
            let photo = elem.photo;
            // let owner = elem.owner;
            return (
            <div class="gall__item gall-item" key={elem._id} onClick={()=>{funcs.toggleGallery('zoom', true, elem)}}>
               <div class="gall-item__photo">
                  <img src={photo} alt="" class="gall-item__img lazyload" data-src={photo}/>
               </div>
               <p class="gall-item__title">{title}</p>
               {/* <p class="gall-item__descr">{owner}</p> */}
            </div>
            )
         })
      } else if(mode === 'gallery'){
         winTitle = 'Галерея';
         galleryClass = 'gall--photos';

         galItems = items.map(elem=>{

            let mediaThing = ''

            switch(elem.media.type){
               case 'image':
                  mediaThing = (<img src={elem.media.link} srcset={elem.media.link} alt="" class="gall-item__img lazyload" data-srcset={elem.media.link}/>)
                  break;
               case 'video':
                  mediaThing = (
                     <>
                     <video class="gall-item__img" preload="metadata">
                        <source src={elem.media.link} type="video/mp4"/>
                        Your browser does not support the video tag.
                     </video>
                     <div className="play-layer">
                        <div className="play-layer__bg"></div>
                        <div className="play-layer__btn play-layer__btn--play">
                           <i className="bi bi-play-fill"></i>
                        </div>
                     </div>
                     </>
                  )
                  break;
            }

            return (
               <div class="gall__item gall-item" key={elem.id} onClick={()=>{funcs.toggleGallery('zoom', true, elem)}}>
                     {mediaThing}
               </div>
            )

         })
      }

      let zoomedGal = funcs.state.showZoomed ? <ZoomedGal item={funcs.state.zoomedItem} funcs={funcs}/> : '';
      let linkToBack = '';
      this.props.prof === '' ? linkToBack = '' : linkToBack = `school/?prof=${this.props.prof}`

      let content = (
         <div class="gall__bd">
            {galItems}
         </div>
      )

      if(items.length === 0){

         let thatWord = ''
         switch(mode){
            case 'cert':
               thatWord = 'сертифікату'
               break;
            case 'cert-personal':
               thatWord = 'сертифікату';
               break;
            case 'stud':
               thatWord = 'студента';
               break;
            case 'books':
               thatWord = 'підручника';
               break;
         }
         
         content = (
            <div className='gall__message'>
               <div className="gall__message-inner">
                  <p className='gall__message-text'>Жодного {thatWord} поки що не додано</p>
                  <a className='gall__message-link' onClick={()=>linkTo(linkToBack)}>На головну</a>
               </div>
            </div>
         )
      }





      return (
         <div class="page" id="page-books">
         <div class={"page__inner"}>
            <div class="page__hd">
               <p class="page__title">{winTitle}</p>
               {/* <div class="page__icon page__icon--left page__close-icon" onClick={()=>{funcs.toggleGallery('cert', false)}}> */}
               <div class="page__icon page__icon--left page__close-icon" onClick={()=>linkTo(linkToBack)}>
                  <i class="bi bi-arrow-left"></i>
               </div>
            </div>
            <div class="page__bd">
               <div class={'gall '+ galleryClass}>
                  <div class="gall__inner">
                     {/* <div class="gall__hd">
                        <div class="gall__filters">
                           <p class="gall__filter is-active bg-active-main">Всі</p>
                           <p class="gall__filter bg-active-eng">Випускники</p>
                           <p class="gall__filter bg-active-deu">Актуальні</p>
                        </div>
                     </div> */}
                     {content}
                  </div>
               </div>
            </div>
         </div>
         {zoomedGal}
      </div>
      );
   }
}

export default BooksGallery;