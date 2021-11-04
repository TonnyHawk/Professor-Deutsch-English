import "slick-carousel/slick/slick.css"; 

import React, { Component } from "react";
import Slider from "react-slick";

import BooksGallery from '../BooksGallery';
import PhotosSlide from './modules/PhotosSlide';
import TextsSlide from './modules/TextsSlide';

function ibg(){
   $.each($('.ibg'), function(index, val) {
      if($(this).find('img').length>0){
         $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
      }
   });
}

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

   toggleGallery(name, state, ...props){
      // preparation
      if(name === 'cert' || name === 'stud' || name === 'cert-personal'){
         if(state){ // open a modul win
            document.documentElement.style = 'overflow: hidden';
         } else{ // close module win
            document.documentElement.style = 'overflow-X: hidden; overflow-Y: visible;';
         }
      }
      // --------------

      switch (name) {
         case 'cert-personal':
            this.setState({showBooks: state, booksGalMode: name})
            break;
         case 'cert':
            this.setState({showBooks: state, booksGalMode: name})
            break;
         case 'stud':
            this.setState({showBooks: state, booksGalMode: name})
            break;
         case 'zoom':
            if(!state){ // close
               this.setState({showZoomed: state, zoomedItem: ''})
            } else{ // open
               this.setState({showZoomed: state, zoomedItem: props[0]})
            }
            break;
      }
   }

   showCertificates(student){
      this.toggleGallery('cert-personal', true)
      this.setState({selectedStudent: student})
   }

   generatePocket(student){
      // adding lang badges
      let langBadges = [];
      if(student.languages){

         student.languages.forEach(elem=>{
            langBadges.push( (
            <div class="badge" key={student.id}>
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
            <p className="slide__action btn" data-id={student.id} onClick={()=>{this.showCertificates(student)}}>Сертифікати</p>
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

    let {showBooks, selectedStudent, booksGalMode, showZoomed, zoomedItem, humans} = this.state;

    
   //  let mainSlides = humans.map(elem=>{
   //    return <CustomSlide student={elem} funcs={this} key={elem.id}/>
   //  })

    let booksGal = showBooks ? <BooksGallery students={humans} student={selectedStudent} mode={booksGalMode} funcs={this}/> : '';
    
    let photoSlides = humans.map(elem=>{
      return (
         <div key={elem.id}>
            <div className="slide__photo ibg">
               <img src={elem.photo} srcset={elem.photo+'-/progressive/yes/-/quality/lightest/-/blur/100/'} className='lazyload' data-srcset={elem.photo} alt=""/>
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
         {booksGal}
         


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