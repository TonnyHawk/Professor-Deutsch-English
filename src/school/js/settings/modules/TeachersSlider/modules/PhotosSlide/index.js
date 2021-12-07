import React, { Component } from 'react';

class PhotosSlide extends Component {
   render() {
   const { student, funcs, ...props } = this.props;

   let pocket = funcs.generatePocket(student);

     return (
      <div class="slide__photos-slider">
      <div>
         <div class="slide__photo ibg">
            <img src="img/teachers/zar.jpg" alt=""/>
         </div>
      </div>
      <div>
         <div class="slide__photo ibg">
            <img src="img/teachers/zvv.jpg" alt=""/>
         </div>
      </div>
   </div>
     );
   }
 }

 export default PhotosSlide;