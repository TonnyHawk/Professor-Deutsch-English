import ReactDOM from 'react-dom';
import React from "react";
import StudentsSlider from './modules/StudentsSlider/index';

let students;
let response = await fetch('http://127.0.0.1:3000/humans');
if (response.ok) { // если HTTP-статус в диапазоне 200-299
  students = await response.json();
  console.log(students);
} else {
alert("Ошибка подгрузки студентов (HTTP): " + response.status);
}

ReactDOM.render(
    <StudentsSlider students={students}/>,
  document.getElementById('students')
);