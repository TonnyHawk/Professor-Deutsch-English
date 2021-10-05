import ReactDOM from 'react-dom';
   import React from "react";
   import CertificatesSection from './modules/CertificatesSection';

let students;
  let response = await fetch('http://127.0.0.1:3000/certificates');
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
