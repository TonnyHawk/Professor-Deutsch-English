import React, { Component } from 'react';

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
      } else{ // if we passed an ogject
         addClass = 'zoomed--gallery-photo';
         let mediaThing = ''
         if(typeof item.media === 'undefined'){
            mediaThing = (<img src={item.photo} alt="" class="multilayer__main"/>)
         }else{
            switch(item.media.type){
               case 'video':
                  mediaThing = (
                     <video class="multilayer__main" preload="metadata" controls>
                        <source src={item.media.link} type="video/mp4"/>
                        Your browser does not support the video tag.
                     </video>
                  )
                  break;
               case 'image':
                  mediaThing = (<img src={item.media.link} alt="" class="multilayer__main"/>)
                  break;
            }
         }
         content = (
            <>
            <div class="zoomed__main-photo multilayer">
               {mediaThing}
            </div>
            <div class="zoomed__main-info talk-buble">
               <div class="talk-buble__header">
                  <p class="talk-buble__title">{item.name}</p>
                  {/* <div class="talk-buble__under-title">
                     <p class="talk-buble__under-title-label">By</p>
                     <p class="talk-buble__under-title-main">Raymond Murphy</p>
                  </div> */}
               </div>
               {pocket}
               <p class="talk-buble__descr">{item.about}</p>
            </div>
            </>
         )
      }

      return (
         <div class={"zoomed " + addClass}>
            <div class="zoomed__bg"></div>
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