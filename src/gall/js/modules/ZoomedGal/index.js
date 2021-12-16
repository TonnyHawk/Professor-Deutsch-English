import React, { Component } from 'react';
import {makeReqObj} from '../../../../js/functions';

function videoGenerator(link){
   return (
      <>
         <video class="multilayer__main" preload="metadata" controls>
            <source src={link} type="video/mp4"/>
            Your browser does not support the video tag.
         </video>
      </>
   )
}

function imageGenerator(link){
   // return (<img src={link} srcset={link} alt="" class="gall-item__img lazyload" data-srcset={link}/>)
   return (<img src={link} alt="" class="multilayer__main"/>)
}

function generateMediaThing(elem, videoGenerator, imageGenerator){
   let reqObj = makeReqObj()

   let link, elemType, mediaType = '';

   // do we have a gallery photo or some student`s profile?
   if(typeof elem.media === 'undefined'){
      elemType = 'student-media';
   }else elemType = 'gallery-media';

   // defining type and getting a link
   switch(elemType){
      case 'student-media':
         if(elem.video.length === 0){
            mediaType = 'image';
            link = elem.photo;
         }else {
            mediaType = 'video';
            link = elem.video.filter(item=>{
               return item.professor === reqObj.prof
            })[0].link;
         }
         break;
      case 'gallery-media':
         mediaType = elem.media.type
         link = elem.media.link
         break;
   }

   // generating image/video code

   let mediaThing = ''

   switch(mediaType){
      case 'image':
         mediaThing = imageGenerator(link)
         break;
      case 'video':
         mediaThing = videoGenerator(link)
         break;
   }

   return mediaThing
}

class ZoomedGal extends Component {
   render() {
      let {item, funcs} = this.props

      // let pocket = funcs.generatePocket(item)
      let pocket = '';

      let addClass, content;
      if(typeof(item) !== 'object'){
         addClass = 'zoomed--single-photo';
         content = (
            <div class="zoomed__main-photo multilayer">
               <img src={item} alt="" class="multilayer__main"/>
            </div>
         )
      } else{ // if we passed an object
         addClass = 'zoomed--gallery-photo';

         let mediaThing = generateMediaThing(item, videoGenerator, imageGenerator);

         // rendering title and description
         let description = item.about !== '' ? (<p class="talk-buble__descr">{item.about}</p>) : '';

         // talk-buble__header should have 'margin-bottom: 0' when description is absent
         let headerStyles = {}
         if(description === '') headerStyles.marginBottom = 0

         // title
         let bubleHeader = ''
         if(item.name !== ''){
            bubleHeader = (
               <div class="talk-buble__header" style={headerStyles}>
                  <p class="talk-buble__title">{item.name}</p>
                  {/* <div class="talk-buble__under-title">
                     <p class="talk-buble__under-title-label">By</p>
                     <p class="talk-buble__under-title-main">Raymond Murphy</p>
                  </div> */}
               </div>
            )
         }

         let info = (
            <div class="zoomed__main-info talk-buble">
               {bubleHeader}
               {pocket}
               {description}
            </div>
         )
         // display no info part when we don't have information in it
         if(bubleHeader === '' && description === ''){
            info = ''
         }

         content = (
            <>
            <div class="zoomed__main-photo multilayer">
               {mediaThing}
            </div>
            {info}
            </>
         )
      }

      return (
         <div class={"zoomed " + addClass}>
            <div class="zoomed__bg" onClick={()=>{funcs.toggleGallery('zoom', false)}}></div>
            <div class="zoomed__inner">
               <div class="zoomed__hd">
                  <div class="zoomed__action-icon zoomed__action-icon--close" onClick={()=>{funcs.toggleGallery('zoom', false)}}>
                     <i class="bi bi-x"></i>
                  </div>
               </div>
               <div class="zoomed__bd">
                  <div class="zoomed__main-content">
                     {content}
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default ZoomedGal;