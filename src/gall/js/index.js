import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import globals from './globals'
import {loadItems, langFilter, makeReqObj} from './functions'
import BooksGallery from './modules/BooksGallery'

class App extends Component {
   constructor(props){
      super(props);
      this.state = {
         showBooks: true,
         selectedStudent: [],
         booksGalMode: props.mode,
         showZoomed: false,
         zoomedItem: '',
         items: props.items,
      };
   }

   toggleGallery(name, state, ...props){
      // preparation
      if(name === 'cert' || name === 'stud'){
         if(state){ // open a modul win
            document.documentElement.style = 'overflow: hidden';
         } else{ // close module win
            document.documentElement.style = 'overflow-X: hidden; overflow-Y: visible;';
         }
      }
      // --------------

      switch (name) {
         case 'cert':
            this.setState({showBooks: state, booksGalMode: name})
            break;
         case 'stud':
            this.setState({showBooks: state, booksGalMode: name})
            break;
         case 'zoom':
            if(!state){ // close
               this.setState({showZoomed: state, zoomedItem: ''})
            } else{ // open
               this.setState({showZoomed: state, zoomedItem: props[0]})
            }
            break;
      }
   }

   render() {
      let {booksGalMode, items} = this.state
      return (
         <BooksGallery items={items} mode={booksGalMode} funcs={this}/>
      );
   }
}

let reqObj = makeReqObj()
console.log(reqObj.what);

let items;
let mode = ''

function getCurrentBooks(state, index){
   return state.data[index].books.map(elem=>{
      let index = state.books.findIndex(book=>{
         return book._id === elem
      })
      return state.books[index]
   })
}

switch(reqObj.what){
   case 'humans':
      items = await loadItems('humans', globals.serverUrl);
      items = langFilter(items, reqObj.prof, 'sort');
      items = items.filter(elem=>{
         if(elem.role === reqObj.role) return elem
      })
      mode = 'stud'
      break;
      case 'cert-personal':
      items = await loadItems('item', globals.serverUrl, `/humans/${reqObj.id}`);
      items = items.certificates;
      mode = 'cert-personal'
      break;
   case 'cert':
      items = await loadItems('certificates', globals.serverUrl);
      items = langFilter(items, reqObj.prof, 'sort');
      mode = 'cert'
      break;
   case 'course-books':
      let books = await loadItems('books', globals.serverUrl);
      let course = await loadItems('item', globals.serverUrl, `/courses/${reqObj.id}`);

      let dataObj = {
         data: [course],
         books
      }

      items = getCurrentBooks(dataObj, 0)
      mode = 'cert-personal'
      break;
   default:
      items = await loadItems('humans', globals.serverUrl);
      items = langFilter(items, reqObj.prof, 'sort');
}


ReactDOM.render(
   <App items={items} mode={mode}/>,
   document.getElementById('root')
);