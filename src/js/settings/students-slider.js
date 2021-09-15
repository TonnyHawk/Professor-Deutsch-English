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
const olya = ref(studentsRef, 'olya-w/olya-w.jpg');
let olyaUrl;
getDownloadURL(olya).then(url=>{
   olyaUrl = url
})


const q = query(collection(db, "students"));
let students = [];

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  students.push({
     name: doc.data().name,
     about: doc.data().about,
     photo: doc.data().photo,
     video: doc.data().video,
     level: doc.data().level,
     professor: doc.data().professor,
     id: doc.data().id
  })
});




class CustomMainSlide extends Component {
   render() {
   const { student, ...props } = this.props;

   // adding lang badges
   let langBadges = [];
   if(student.level){
      for(let key in student.level){
         langBadges.push( (
               <div class="talk-buble__badge badge">
                  <p class="badge__main-text">{key}</p>
                  <p class="badge__aside-text">{student.level[key]}</p>
               </div>
            ))
      }
   }

   // forming pocket
   let pocket = '';
   if(langBadges.length > 0){
      pocket = (
         <div class="talk-buble__pocket">
            <div class="talk-buble__badges">
               {langBadges}
            </div>
            <p class="talk-buble__action btn">Сертифікати</p>
         </div>
      )
   }

     return (
      <div class="sl__slide-unit" key={student.id}>
      <div class="sl__photo multilayer">
         <img src={olyaUrl} alt="" class="multilayer__main"/>
      </div>
      <div class="sl__pop talk-buble">
         <div class="talk-buble__header">
            <p class="talk-buble__title">{student.name}</p>
         </div>
        {pocket}
         <p class="talk-buble__descr">{student.about}</p>
      </div>
   </div>
     );
   }
 }


class SectionStudents extends Component {
   constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
      };
    }

    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });


    }


  render() {
    const main = {
          adaptiveHeight: false,
          arrows: false,
          infinite: false,
          speed: 500,
          fade: true,
          cssEase: 'linear',
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
      return <CustomMainSlide student={elem} key={elem.id}/>
    })
    return (
       <>
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
                     <div class="sl__prev-item multilayer">
                        <img src="img/students/albina-mar/albina-mar.jpg" alt="" class="multilayer__main"/>
                     </div>
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