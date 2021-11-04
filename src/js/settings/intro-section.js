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

// function update(){
//    console.log('lang ', store.getState().lang)
// }


ReactDOM.render(
   <IntroSection dispatch={store.dispatch} setLang={setLang}/>,
 document.querySelector('#intro')
);


async function update(){
   let students;
   let response = await fetch(globals.default.serverUrl+'/courses');
   if (response.ok) { // если HTTP-статус в диапазоне 200-299
     students = await response.json();
     students = students.filter(elem=>{
       let permission = false
       elem.professor.forEach(element => {
         if(element === store.getState().lang) permission = true
       });
       return permission
     })
  } else {
  alert("Ошибка подгрузки Курсов (HTTP): " + response.status);
  }
 
 
  let books;
   response = await fetch(globals.default.serverUrl+'/books');
   if (response.ok) { // если HTTP-статус в диапазоне 200-299
     books = await response.json();
  } else {
  alert("Ошибка подгрузки книг (HTTP): " + response.status);
  }
    
    ReactDOM.render(
        <CoursesSection data={students} books={books}/>,
      document.querySelector('#courses #tab')
    );
}

store.subscribe(update)