import ReactDOM from 'react-dom';
import React from "react";
import IntroSection from './modules/IntroSection';
import CoursesSection from './modules/CoursesSection';
import TeachersSlider from './modules/TeachersSlider';
import StudentsSlider from './modules/StudentsSlider/index';

import { createStore } from "redux"
import { configureStore, createSlice } from '@reduxjs/toolkit';

async function loadItems(collName){
   let response = await fetch(globals.default.serverUrl+'/'+collName);
   if (response.ok) { // если HTTP-статус в диапазоне 200-299
      return response.json();
   } else {
      alert(`Ошибка подгрузки ${collName} (HTTP): ` + response.status);
      return []
   }
}

function langFilter(items, store){
   return items.filter(elem=>{
      let permission = false
      elem.professor.forEach(element => {
         if(element === store.getState().lang) permission = true
      });
      return permission
   })
}

// redux setup
let initialState = {
   lang: ''
}

let langSlice = createSlice({
   name: 'lang',
   initialState,
   reducers:{
      setLang: (state, action)=>{
         state.lang = action.payload
      }
   }
})

let {setLang} = langSlice.actions
let reducer = langSlice.reducer

const store = createStore(reducer)


ReactDOM.render(
   <IntroSection dispatch={store.dispatch} setLang={setLang}/>,
 document.querySelector('#intro')
);


async function update(){

   let courses = await loadItems('courses');
   courses = langFilter(courses, store)

   let books = await loadItems('books')
   // courses
   ReactDOM.render(
      <CoursesSection data={courses} books={books}/>,
      document.querySelector('#courses #tab')
   );

   let humans = await loadItems('humans')
   humans = langFilter(humans, store)
   
   // teachers
   ReactDOM.render(
      <TeachersSlider humans={humans}/>,
    document.getElementById('teachers')
   );

   // students
   ReactDOM.render(
      <StudentsSlider students={humans}/>,
      document.getElementById('students')
   );

}

store.subscribe(update)