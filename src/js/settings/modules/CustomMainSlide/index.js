import React, { Component } from 'react';

class CustomMainSlide extends Component {
   render() {
   const { student, funcs, ...props } = this.props;

   let pocket = funcs.generatePocket(student);
   let media = funcs.generateMedia(student);

     return (
      <div class="sl__slide-unit" key={student.id}>
      {media}
      <div class="sl__pop talk-buble">
         <div class="talk-buble__header">
            <p class="talk-buble__title">{student.name}</p>
         </div>
        {/* {pocket} */}
         <p class="talk-buble__descr">{student.about}</p>
      </div>
   </div>
     );
   }
 }

 export default CustomMainSlide;