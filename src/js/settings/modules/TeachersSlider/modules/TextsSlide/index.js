import React, { Component } from 'react';

class TextsSlide extends Component {
   constructor(){
      super()
      this.readmore = React.createRef()
   }
   componentDidMount() {
      $(this.readmore.current).readmore({
         num: 4
      });
   }
   
   render() {
   const { student, funcs, ...props } = this.props;

      let pocket = funcs.generatePocket(student);
      // let stats = student.highlights.map(elem=>{
      //    return (
      //    <div className="slide__stat stat">
      //       <p className="stat__num">{elem.num}</p>
      //       <p className="stat__title">{elem.descr}</p>
      //    </div>
      //    )
      // })
      let content = student.about.split('\r\n').filter(elem=>{
         return elem !== ''
      }).map((elem, index)=>{
         elem = elem[0].toUpperCase() + elem.slice(1, elem.length);
         return (<p className='slide__text' key={index}>{elem}</p>)
      })
      return (
         <>
            <h2 className="slide__title slide__item">{student.name}</h2>
            {/* {pocket} */}
            {/* <div className="slide__stats slide__item">
               {stats}
            </div> */}
            <div className="slide__paragraphs has-readmore" ref={this.readmore}>
               <div className="has-readmore">
               {content}
               </div>
            </div>
         </>
      )
   }
 }

 export default TextsSlide;