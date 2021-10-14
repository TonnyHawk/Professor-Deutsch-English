import ReactDOM from 'react-dom';
   import React from "react";
   import CertificatesSection from './modules/CertificatesSection';

let students;
  let response = await fetch(globals.default.serverUrl+'/certificates');
  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    students = await response.json();
    console.log(students);
 } else {
 alert("Ошибка подгрузки студентов (HTTP): " + response.status);
 }
   
   ReactDOM.render(
       <CertificatesSection humans={students} certificates={students}/>,
     document.getElementById('certificates')
   );
