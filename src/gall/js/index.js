import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import globals from '../../js/globals'
import {loadItems, langFilter, makeReqObj, linkTo, setPageTitle} from '../../js/functions'
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
         <BooksGallery items={items} mode={booksGalMode} funcs={this} prof={this.props.prof}/>
      );
   }
}

let reqObj = makeReqObj()

// reqObj.what = 'humans';
// reqObj.prof = 'Deutsch';
// reqObj.role = 'student';

let items;
let mode = '';
let prof = reqObj.prof || '';

function getCurrentBooks(state, index){
   return state.data[index].books.map(elem=>{
      let index = state.books.findIndex(book=>{
         return book._id === elem
      })
      return state.books[index]
   })
}
if(reqObj !== {}){// some props given
   switch(reqObj.what){
      case 'humans':
         if(typeof reqObj.prof !== 'undefined'){
            items = await loadItems('humans', globals.serverUrl);
            items = langFilter(items, reqObj.prof, 'sort');
            items = items.filter(elem=>{
               if(elem.role === reqObj.role) return elem
            })
            mode = 'stud';
         }else{
            linkTo('')
         }
         break;
      case 'cert-personal':
         if(typeof reqObj.id !== 'undefined'){
            items = await loadItems('item', globals.serverUrl, `/humans/${reqObj.id}`);
            items = items.certificates;
   
            mode = 'cert-personal'
         }else{
            linkTo('')
         }
         break;
      case 'cert':
         if(typeof reqObj.prof !== 'undefined'){
            items = await loadItems('certificates', globals.serverUrl);
            items = langFilter(items, reqObj.prof, 'sort');
            mode = 'cert'
         }else{
            linkTo('')
         }
         break;
      case 'course-books':
         if(typeof reqObj.id !== 'undefined'){
            let books = await loadItems('books', globals.serverUrl);
            let course = await loadItems('item', globals.serverUrl, `/courses/${reqObj.id}`);
   
            let dataObj = {
               data: [course],
               books
            }
   
            items = getCurrentBooks(dataObj, 0)
            mode = 'books'
         }else{
            linkTo('')
         }
         break;
      case 'gallery':
         if(typeof reqObj.prof !== 'undefined'){
            items = await loadItems('gallery', globals.serverUrl);
            items = langFilter(items, reqObj.prof, 'sort');
            mode = 'gallery'
         }else{
            linkTo('')
         }
         break;
      default:
         console.log('no props given');
         linkTo('')
   }

   ReactDOM.render(
      <App items={items} mode={mode} prof={prof}/>,
      document.getElementById('root')
   );


}else{ // no properties given
   console.log('no props given');
   linkTo('')
}