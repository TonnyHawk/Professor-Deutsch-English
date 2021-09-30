
   // let sectionId = '#teachers';
   // $(sectionId + ' .slide__texts-slider').on('init', function (event,
   //    slick) { // adding readmore with some delay to properly calculate the heights of cropped elements
   //    setTimeout(function () {
   //       $(sectionId).readmore({
   //          num: 1
   //       });
   //    }, 200)
   // });
   // $(sectionId + ' .slide__photos-slider').slick({
   //    arrows: true,
   //    variableWidth: true,
   //    centerMode: true,
   //    mobileFirst: true,
   //    asNavFor: sectionId + ' .slide__texts-slider',
   //    appendArrows: $(sectionId + ' .slider__controlls'),
   //    prevArrow: '<div class="slider__arrow-left"><img src="img/icons/slider-arrow-left.svg" alt=""></div>',
   //    nextArrow: '<div class="slider__arrow-right"><img src="img/icons/slider-arrow-right.svg" alt=""></div>',
   //    responsive: [{
   //       breakpoint: 992,
   //       settings: {
   //          centerMode: false,
   //       }
   //    }]
   // });

   // $(sectionId + ' .slide__texts-slider').slick({
   //    arrows: false,
   //    asNavFor: sectionId + ' .slide__photos-slider',
   //    mobileFirst: true,
   //    responsive: [{
   //       breakpoint: 992,
   //       settings: {
   //          fade: true,
   //       }
   //    }]
   // });


   
   import ReactDOM from 'react-dom';
   import React from "react";
   import TeachersSlider from './modules/TeachersSlider';

  //  import { initializeApp } from "firebase/app";
  //  import { collection, getFirestore, getDocs,
  //           query } from "firebase/firestore";
   
  //  // Your web app's Firebase configuration
  //  const firebaseConfig = {
  //    apiKey: "AIzaSyBuX8AU5VZ3oFlHaa9YHLHpCeBoDEOQAOY",
  //    authDomain: "profde-fbd15.firebaseapp.com",
  //    projectId: "profde-fbd15",
  //    storageBucket: "profde-fbd15.appspot.com",
  //    messagingSenderId: "795515383884",
  //    appId: "1:795515383884:web:571c2f96df7185db53c4e9"
  //  };
   
  //  // Initialize Firebase
  //  const app = initializeApp(firebaseConfig);
  //  const db = getFirestore();
   
   
   
  //  const q = query(collection(db, "teachers"));
  //  let students = [];
   
  //  const querySnapshot = await getDocs(q);
  //  querySnapshot.forEach((doc) => {
  //    // doc.data() is never undefined for query doc snapshots
  //    students.push({
  //       name: doc.data().name,
  //       about: doc.data().about,
  //       photo: doc.data().avatar,
  //       video: doc.data().video,
  //       languages: doc.data().language,
  //       professor: doc.data().professor,
  //       id: doc.data().id,
  //       certificates: doc.data().certificates,
  //       highlights: doc.data().highlights
  //    })
  //  });

  let students;
  let response = await fetch('http://127.0.0.1:3000/teachers');
  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    students = await response.json();
    console.log(students);
 } else {
 alert("Ошибка подгрузки студентов (HTTP): " + response.status);
 }

   
   ReactDOM.render(
       <TeachersSlider humans={students}/>,
     document.getElementById('teachers')
   );
