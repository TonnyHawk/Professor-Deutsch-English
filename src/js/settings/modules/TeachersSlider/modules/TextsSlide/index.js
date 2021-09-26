import React, { Component } from 'react';

class TextsSlide extends Component {

   render() {
   const { student, funcs, ...props } = this.props;

      let pocket = funcs.generatePocket(student);
      let stats = student.highlights.map(elem=>{
         return (
         <div class="slide__stat stat">
            <p class="stat__num">{elem.num}</p>
            <p class="stat__title">{elem.descr}</p>
         </div>
         )
      })
      return (
         <>
            <h2 class="slide__title slide__item">{student.name}</h2>
            {pocket}
            {/* <div class="slide__stats slide__item">
               {stats}
            </div> */}
            <div class="slide__paragraphs has-readmore">
               <p className='slide__text'>{student.about}</p>
            </div>
         </>
      )
   }
 }

 export default TextsSlide;