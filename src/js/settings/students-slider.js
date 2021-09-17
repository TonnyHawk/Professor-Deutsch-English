//  let sectionId = "#students"

//  $(sectionId + ' .sl__preview').slick({
//    adaptiveHeight: true,
//    centerMode: true,
//    mobileFirst: true,
//    variableWidth: true,
//    arrows: false,
//    asNavFor: sectionId + ' .sl__main',
//    infinite: false,
//    responsive: [{
//     breakpoint: 992,
//     settings: {
//       adaptiveHeight: false,
//       focusOnSelect: true
//     }
//   }]
//  });

//  $(sectionId + ' .sl__main').slick({
//    adaptiveHeight: true,
//    mobileFirst: true,
//    arrows: false,
//    asNavFor: sectionId + ' .sl__preview',
//    infinite: false,
//    speed: 500,
//    fade: true,
//    cssEase: 'linear',
//    responsive: [{
//     breakpoint: 992,
//     settings: {
//       adaptiveHeight: false,
//     }
//   }]
//  });
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ReactDOM from 'react-dom';

import React, { Component } from "react";
import Slider from "react-slick";



import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { collection, doc, setDoc, getDoc, getFirestore, addDoc, getDocs,
         query, where, } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuX8AU5VZ3oFlHaa9YHLHpCeBoDEOQAOY",
  authDomain: "profde-fbd15.firebaseapp.com",
  projectId: "profde-fbd15",
  storageBucket: "profde-fbd15.appspot.com",
  messagingSenderId: "795515383884",
  appId: "1:795515383884:web:571c2f96df7185db53c4e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);
const storageRef = ref(storage);

const studentsRef = ref(storage, 'students');


const q = query(collection(db, "students"));
let students = [];

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  students.push({
     name: doc.data().name,
     about: doc.data().about,
     photo: doc.data().avatar,
     video: doc.data().video,
     languages: doc.data().language,
     professor: doc.data().professor,
     id: doc.data().id,
     certificates: doc.data().certificates,
  })
});


import BooksGallery from './modules/BooksGallery';
import CustomPreviewSlide from './modules/CustomPreviewSlide/index.js';
import CustomMainSlide from './modules/CustomMainSlide/index.js';
import ZoomedGal from './modules/ZoomedGal/index';


class SectionStudents extends Component {
   constructor(props) {
      super(props);
      this.state = {
         nav1: null,
         nav2: null,
         showBooks: false,
         selectedStudent: [],
         booksGalMode: '',
         showZoomed: false,
         zoomedItem: ''
      };
    }
   
   componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
   }

   toggleGallery(name, state, ...props){
      switch (name) {
         case 'cert':
            this.setState({showBooks: state, booksGalMode: name})
            break;
         case 'zoom':
            if(!state){
               this.setState({showZoomed: state, zoomedItem: ''})
            } else{
               this.setState({showZoomed: state, zoomedItem: props[0]})
            }
            break;
      }
   }

   showCertificates(student){
      this.toggleGallery('cert', true)
      this.setState({selectedStudent: student})
   }


  render() {
    const main = {
          adaptiveHeight: false,
          arrows: false,
          infinite: false,
          speed: 500,
         //  fade: true,
         //  cssEase: 'linear',
          responsive: [{
             breakpoint: 992,
             settings: {
                adaptiveHeight: true,
             }
          }]
    };

    const preview = {
       centerMode: true,
       variableWidth: true,
       arrows: false,
       infinite: false,
       adaptiveHeight: false,
       focusOnSelect: true,
       responsive: [{
          breakpoint: 992,
          settings: {
             adaptiveHeight: true,
             focusOnSelect: false
          }
       }],
      focusOnSelect: true
    }

    let mainSlides = students.map(elem=>{
      return <CustomMainSlide student={elem} functions={this} key={elem.id}/>
    })
    let previewSlides = students.map(elem=>{
      return <CustomPreviewSlide student={elem} key={elem.id}/>
    })

    let {showBooks, selectedStudent, booksGalMode, showZoomed, zoomedItem} = this.state;
    let booksGal = showBooks ? <BooksGallery student={selectedStudent} mode={booksGalMode} funcs={this}/> : '';
    let zoomedGal = showZoomed ? <ZoomedGal item={zoomedItem} funcs={this}/> : '';
    return (
       <>
         {booksGal}
         {zoomedGal}

         <div class="container">
            <div class="section__header">
               <h1 class="section__title">Наші учні</h1>
               <div class="section__expand-btn feature hover-circled">
                  <div class="feature__icon hover-circled__icon"><i class="bi bi-collection"></i></div>
                  <p class="feature__text">Більше</p>
               </div>
            </div>
         </div>

         <div class="sl">
            <Slider 
               className="sl__main" {...main}
               asNavFor={this.state.nav2}
               ref={slider => (this.slider1 = slider)}>

               {mainSlides}

            </Slider>
            <Slider 
               className="sl__preview" {...preview}
               asNavFor={this.state.nav1}
               ref={slider => (this.slider2 = slider)}>
                  {previewSlides}
            </Slider>
         </div>

   </>
    );
  }
}


ReactDOM.render(
    <SectionStudents/>,
  document.getElementById('students')
);