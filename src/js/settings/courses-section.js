import ReactDOM from 'react-dom';
   import React from "react";
   import CoursesSection from './modules/CoursesSection';

let students;
  let response = await fetch(globals.default.serverUrl+'/courses');
  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    students = await response.json();
    console.log(students);
 } else {
 alert("Ошибка подгрузки Курсов (HTTP): " + response.status);
 }

 let books;
  response = await fetch(globals.default.serverUrl+'/books');
  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    books = await response.json();
    console.log(books);
 } else {
 alert("Ошибка подгрузки книг (HTTP): " + response.status);
 }
   
   ReactDOM.render(
       <CoursesSection data={students} books={books}/>,
     document.querySelector('#courses #tab')
   );