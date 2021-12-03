import ReactDOM from 'react-dom';
import React from "react";
import IntroSection from './settings/modules/IntroSection';
import CoursesSection from './settings/modules/CoursesSection';
import TeachersSlider from './settings/modules/TeachersSlider';
import StudentsSlider from './settings/modules/StudentsSlider/index';
import CertificatesSection from './settings/modules/CertificatesSection';
import globals from './my/globals'
import {langFilter, loadItems, makeReqObj} from './functions'


// ReactDOM.render(
//    <IntroSection dispatch={store.dispatch} setLang={setLang}/>,
//  document.querySelector('#intro')
// );
let reqObj = makeReqObj()
let schoolName = ''
try{ // if there is no properties set in the request string
   schoolName = reqObj.prof.split('#')[0] || 'Deutsch';
}catch{
   // toDO  якшо не вказана школа редіректить на інтро
   schoolName = 'Deutsch'
}
document.documentElement.style = 'overflow-X: hidden; overflow-Y: visible;';


   let courses = await loadItems('courses', globals.serverUrl);
   courses = langFilter(courses, schoolName)

   // courses
   ReactDOM.render(
      <CoursesSection data={courses}/>,
      document.querySelector('#courses #tab')
   );

   let humans = await loadItems('humans', globals.serverUrl)
   humans = langFilter(humans, schoolName, 'sort')

   // teachers
   ReactDOM.render(
      <TeachersSlider humans={humans}/>,
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