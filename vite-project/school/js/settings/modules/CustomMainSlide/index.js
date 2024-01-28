import React, { Component } from 'react';

class CustomMainSlide extends Component {
   render() {
   const { student, funcs, ...props } = this.props;

   let pocket = funcs.generatePocket(student);
   let media = funcs.generateMedia(student);

     return (
      <div className="sl__slide-unit" key={student.id}>
      {media}
      <div className="sl__pop talk-buble">
         <div className="talk-buble__header">
            <p className="talk-buble__title">{student.name}</p>
         </div>
        {/* {pocket} */}
         <p className="talk-buble__descr">{student.about}</p>
      </div>
   </div>
     );
   }
 }

 export default CustomMainSlide;