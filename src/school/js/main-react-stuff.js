import ReactDOM from 'react-dom';
import React from "react";
import CoursesSection from './settings/modules/CoursesSection';
import TeachersSlider from './settings/modules/TeachersSlider';
import StudentsSlider from './settings/modules/StudentsSlider/';
import GalleryShowcase from './settings/modules/GalleryShowcase/';
import globals from '../../js/globals'
import {langFilter, loadItems, makeReqObj, linkTo, setPageTitle} from '../../js/functions'


   let reqObj = makeReqObj()
   let schoolName = ''
   try{ // if there is no properties seted up in the request string
      switch(reqObj.prof.split('#')[0]){
         case 'Deutsch':
            schoolName = 'Deutsch'
            break;
         case 'English':
            schoolName = 'English'
            break;
         default:
            linkTo('');
      }
   }catch{
      // linkTo('')
      schoolName = 'Deutsch'
   }


   //-- document manipulations
   // click events
   document.querySelector('#gallery-showcase .section__expand-btn').addEventListener('click', function(){
      linkTo(`gall/?what=gallery&prof=${schoolName}`);
   });

   document.querySelector('#students .section__expand-btn').addEventListener('click', function(){
      linkTo(`gall/?what=humans&prof=${schoolName}&role=student`);
   });

   document.querySelector('.nav__logo').addEventListener('click', ()=>{
      linkTo('');
   })
   document.querySelector('.nav__lang-toggler').addEventListener('click', ()=>{
      linkTo('');
   })

   document.querySelector('#certificates .certificates__my-btn').addEventListener('click', ()=>{
      linkTo(`gall/?what=cert&prof=${schoolName}`)
   })

   // page title
   let thatWord = ''
   if(reqObj.prof === 'Deutsch') thatWord = 'німецької'
   else if(reqObj.prof === 'English') thatWord = 'англійської'
   let title = 'Professor '+reqObj.prof+' | Школа вивчення '+thatWord;

   setPageTitle(title);

   document.documentElement.style = 'overflow-X: hidden; overflow-Y: visible;';


   //-- react sections

   let courses = await loadItems('courses', globals.serverUrl);
   courses = langFilter(courses, schoolName)

   // courses
   ReactDOM.render(
      <CoursesSection data={courses} prof={schoolName}/>,
      document.querySelector('#courses #tab')
   );

   let humans = await loadItems('humans', globals.serverUrl)
   humans = langFilter(humans, schoolName)

   // teachers
   ReactDOM.render(
      <TeachersSlider humans={humans} prof={schoolName}/>,
      document.querySelector('#teachers .slider')
   );

   // students
   ReactDOM.render(
      <StudentsSlider students={humans} prof={schoolName}/>,
      document.querySelector('#students .sl')
   );

   let gallerySloths = await loadItems('gallery', globals.serverUrl)
   gallerySloths = langFilter(gallerySloths, schoolName)
   console.log(gallerySloths);
   gallerySloths = gallerySloths.filter(({showcase})=>{
      console.log(showcase);
      let item = showcase.find(elem=>elem.prof === schoolName)
      if(typeof item !== 'undefined') return item.place !== 'null';
   })

   // gallery showcase
   ReactDOM.render(
      <GalleryShowcase data={gallerySloths} prof={schoolName}/>,
      document.querySelector('#gallery-showcase .gallery-showcase__content')
   );