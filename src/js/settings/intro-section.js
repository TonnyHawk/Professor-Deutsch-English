import ReactDOM from 'react-dom';
import React from "react";
import IntroSection from './modules/IntroSection';
import CoursesSection from './modules/CoursesSection';

import { createStore } from "redux"
import { configureStore, createSlice } from '@reduxjs/toolkit';

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

async function loadItems(collName){
   let response = await fetch(globals.default.serverUrl+'/'+collName);
   if (response.ok) { // если HTTP-статус в диапазоне 200-299
      return response.json();
   } else {
      alert(`Ошибка подгрузки ${collName} (HTTP): ` + response.status);
      return []
   }
}


async function update(){

   let courses = await loadItems('courses');

   courses = courses.filter(elem=>{
      let permission = false
      elem.professor.forEach(element => {
         if(element === store.getState().lang) permission = true
      });
      return permission
   })

   let books = await loadItems('books')

   ReactDOM.render(
      <CoursesSection data={courses} books={books}/>,
      document.querySelector('#courses #tab')
   );
}

store.subscribe(update)