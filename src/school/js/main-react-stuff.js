import ReactDOM from 'react-dom';
import React from "react";
import CoursesSection from './settings/modules/CoursesSection';
import TeachersSlider from './settings/modules/TeachersSlider';
import StudentsSlider from './settings/modules/StudentsSlider/index';
import CertificatesSection from './settings/modules/CertificatesSection';
import globals from '../../js/globals'
import {langFilter, loadItems, makeReqObj, linkTo} from '../../js/functions'


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
   linkTo('')
   // schoolName = 'Deutsch'
}

   document.querySelector('#gallery-showcase .linkTo').addEventListener('click', function(){
      linkTo(`gall/?what=gallery&prof=${schoolName}`);
   });

   document.querySelector('.nav__logo').addEventListener('click', ()=>{
      linkTo('');
   })

   document.documentElement.style = 'overflow-X: hidden; overflow-Y: visible;';


   let courses = await loadItems('courses', globals.serverUrl);
   courses = langFilter(courses, schoolName)

   // courses
   ReactDOM.render(
      <CoursesSection data={courses} prof={schoolName}/>,
      document.querySelector('#courses #tab')
   );

   let humans = await loadItems('humans', globals.serverUrl)
   humans = langFilter(humans, schoolName, 'sort')

   // teachers
   ReactDOM.render(
      <TeachersSlider humans={humans} prof={schoolName}/>,
      document.getElementById('teachers')
   );

   // students
   ReactDOM.render(
      <StudentsSlider students={humans} prof={schoolName}/>,
      document.getElementById('students')
   );


   let certs = await loadItems('certificates', globals.serverUrl)
   certs = langFilter(certs, schoolName, 'sort')

   ReactDOM.render(
      <CertificatesSection certificates={certs} prof={schoolName}/>,
   document.getElementById('certificates')
   );