import React, { Component } from 'react';

class ZoomedGal extends Component {
   render() {
      let {item, funcs} = this.props
      return (
         <div class="zoomed zoomed--single-photo">
         <div class="zoomed__inner">
            <div class="zoomed__hd">
               <div class="zoomed__action-icon zoomed__action-icon--close" onClick={()=>{funcs.toggleGallery('zoom', false)}}>
                  <i class="bi bi-x"></i>
               </div>
            </div>
            <div class="zoomed__bd">
               <div class="zoomed__main-content">
                  <div class="zoomed__main-photo multilayer">
                     <img src={item} alt="" class="multilayer__main"/>
                  </div>
               </div>
            </div>
         </div>
         <div class="zoomed__bg"></div>
      </div>
      );
   }
}

export default ZoomedGal;