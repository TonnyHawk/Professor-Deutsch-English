import React, { Component } from 'react';

class ZoomedGal extends Component {
   render() {
      let {item, funcs} = this.props

      let pocket = funcs.generatePocket(item)
      
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
         content = (
            <>
            <div class="zoomed__main-photo multilayer">
               <img src={item.photo} alt="" class="multilayer__main"/>
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
         <div class="zoomed__bg"></div>
      </div>
      )
   }
}

export default ZoomedGal;