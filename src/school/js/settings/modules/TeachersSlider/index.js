import "slick-carousel/slick/slick.css"; 

import React, { Component } from "react";
import Slider from "react-slick";

// import PhotosSlide from './modules/PhotosSlide';

import TextsSlide from './modules/TextsSlide';
import {ibg} from '../../../my/globals';
import {linkTo} from '../../../../../js/functions'

function SampleNextArrow(props) {
   const { className, style, onClick } = props;
   return (<div className="slider__arrow-left" onClick={onClick}><img src="img/icons/slider-arrow-left.svg" alt=""/></div>);
 }
 
 function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (<div className="slider__arrow-right" onClick={onClick}><img src="img/icons/slider-arrow-right.svg" alt=""/></div>);
 }

class TeachersSlider extends Component {
   constructor(props) {
      super(props);
      let humans = props.humans.filter(elem=>{
         return elem.role === 'teacher'
      })
      this.state = {
         nav1: null,
         nav2: null,
         showBooks: false,
         selectedStudent: [],
         booksGalMode: '',
         showZoomed: false,
         zoomedItem: '',
         humans
      };
    }
   
   componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
      ibg();
   }

   generatePocket(student){
      // adding lang badges
      let langBadges = [];
      if(student.languages){

         student.languages.forEach((elem, index)=>{
            langBadges.push( (
            <div class="badge" key={index}>
               <p class="badge__main-text">{elem.name}</p>
               <p class="badge__aside-text">{elem.lvl}</p>
            </div>
               ))
         })
      }

      // adding certificates btn
      let actionBtn = '';
      if(student.certificates.length > 0){
         actionBtn = (
            <p className="slide__action btn" data-id={student.id} onClick={()=>linkTo(`gall/?what=cert-personal&id=${student._id}&prof=${this.props.prof}`)}>Сертифікати</p>
         )
      }

      // forming pocket
      let pocket = '';
      if(actionBtn !== ''){
         pocket = (
            <div className="slide__row slide__item">
               {/* <div className="slide__badges">
                  {langBadges}
               </div> */}
               {actionBtn}
            </div>
         )
      }
      // if(langBadges.length > 0){
      //    pocket = (
      //       <div className="slide__row slide__item">
      //          <div className="slide__badges">
      //             {/* {langBadges} */}
      //          </div>
      //          {actionBtn}
      //       </div>
      //    )
      // }

      return pocket;
   }


  render() {
    const settingsPhotos = {
      arrows: true,
      variableWidth: true,
      centerMode: false,
      // asNavFor: sectionId + ' .slide__texts-slider',
      prevArrow: <SampleNextArrow/>,
      nextArrow: <SamplePrevArrow/>,
      responsive: [{
         breakpoint: 992,
         settings: {
            centerMode: true,
         }
      }]
    };

    const settingsTexts = {
      arrows: false,
      // asNavFor: sectionId + ' .slide__photos-slider',
      // fade: true,
      responsive: [{
         breakpoint: 992,
         settings: {
            // fade: false,
         }
      }]
    }

    let {humans} = this.state;

    
   //  let mainSlides = humans.map(elem=>{
   //    return <CustomSlide student={elem} funcs={this} key={elem.id}/>
   //  })

    
    let photoSlides = humans.map(elem=>{
      return (
         <div key={elem.id}>
            <div className="slide__photo ibg">
               <img src={elem.photo} srcSet={elem.photo} className='lazyload' data-srcset={elem.photo} alt=""/>
            </div>
         </div>
      )
    })

    let textSlides = humans.map(elem=>{
      return (
         <TextsSlide student={elem} funcs={this} key={elem.id}/>
      )
    })
    return (
       <>


   <h1 className="section__title">З вами працюватимуть професіонали</h1>
   <div className="slider">
      <div className="slider__slide slide">
         <Slider className='slide__photos-slider' {...settingsPhotos} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}>
               {photoSlides}
         </Slider>
         <Slider className='slide__texts-slider' {...settingsTexts} asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)}>
            {textSlides}
         </Slider>
      </div>
   </div>

   </>
    );
  }
}

export default TeachersSlider;