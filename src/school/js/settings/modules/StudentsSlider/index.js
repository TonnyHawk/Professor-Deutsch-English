import "slick-carousel/slick/slick.css"; 

import React, { Component } from "react";
import Slider from "react-slick";

// import CustomPreviewSlide from '../CustomPreviewSlide/index.js';
import CustomMainSlide from '../CustomMainSlide/index.js';
import Video from '../Video';
import {linkTo} from '../../../../../js/functions'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={'sl__controll sl__controll--next'}
      onClick={onClick}
    >
      <div className="sl__controll-circle"></div>
      <div className="sl__controll-icon">
      <img src="img/icons/sl__controll--next.svg" alt="" />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={'sl__controll sl__controll--prev'}
      onClick={onClick}
    >
      <div className="sl__controll-circle"></div>
      <div className="sl__controll-icon">
         <img src="img/icons/sl__controll--prev.svg" alt="" />
      </div>
    </div>
  );
}

class StudentsSlider extends Component {
   constructor(props) {
      super(props);
      this.state = {
         nav1: null,
         nav2: null,
         showBooks: false,
         selectedStudent: [],
         booksGalMode: '',
         showZoomed: false,
         zoomedItem: '',
         students: props.students
      };
    }

   generateMedia(student){
      let result = '';
      let video = student.video.find(elem=>{
         return elem.professor === this.props.prof
      })
      if(typeof video !== 'undefined'){
         result = <Video src={video.link}/>
      }else{
         result = (
            <div className="sl__photo multilayer">
               <img src={student.photo} srcSet={student.photo} alt="" className="multilayer__main lazyload" data-srcset={student.photo}/>
            </div>
         )
      }

      return result;
   }

   generatePocket(student){
      // adding lang badges
      let langBadges = [];
      if(student.languages){

         student.languages.forEach(elem=>{
            langBadges.push( (
                  <div className="talk-buble__badge badge" key={student.id}>
                     <p className="badge__main-text">{elem.name}</p>
                     <p className="badge__aside-text">{elem.lvl}</p>
                  </div>
               ))
         })
      }

      // adding certificates btn
      let actionBtn = '';
      // if(student.certificates.length > 0){
      //    actionBtn = (
      //       <p className="talk-buble__action btn" data-id={student.id} onClick={()=>{this.showCertificates(student)}}>Сертифікати</p>
      //    )
      // }

      // forming pocket
      let pocket = '';
      if(langBadges.length > 0){
         pocket = (
            <div className="talk-buble__pocket">
               <div className="talk-buble__badges">
                  {langBadges}
               </div>
               {actionBtn}
            </div>
         )
      }

      return pocket;
   }


  render() {
    const main = {
          adaptiveHeight: true,
          infinite: true,
          variableWidth: false,
          centerMode: true,
          speed: 500,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [{
             breakpoint: 992,
             settings: {
                adaptiveHeight: true,
                variableWidth: true,
             }
          }]
    };

    let {students} = this.state;

    // consider to show only students
    students = students.filter(elem=>{
      if(elem.role === 'student') return elem
    })
    
    // generating slides
    let mainSlides = students.map(elem=>{
       return <CustomMainSlide student={elem} funcs={this} key={elem.id}/>
    })
    
    return (
       <>
         

         <div className="container">
            <div className="section__header">
               <h1 className="section__title">Наші випускники</h1>
               <div className="section__expand-btn feature hover-circled" onClick={()=>linkTo(`gall/?what=humans&prof=${this.props.prof}&role=student`)}>
                  <div className="feature__icon hover-circled__icon"><i className="bi bi-collection"></i></div>
                  <p className="feature__text">Більше</p>
               </div>
            </div>
         </div>

         <div className="sl">
            <Slider 
               className="sl__main" {...main}
               asNavFor={this.state.nav2}>

               {mainSlides}

            </Slider>
         </div>

   </>
    );
  }
}

export default StudentsSlider;