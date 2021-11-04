import React, { Component } from 'react';
import BooksGallery from '../BooksGallery';

class CoursesSection extends Component {
   constructor(props){
      super(props)
      this.state = {
         data: props.data, // courses info here
         currentTab: props.data[0],
         books: props.books, // all books
         currentBooks: [],
         showBooks: false,
         selectedStudent: [],
         booksGalMode: '',
      }

      this.tab = React.createRef()
   }

   getCurrentBooks(state, index){
      return state.data[index].books.map(elem=>{
         let index = state.books.findIndex(book=>{
            return book._id === elem
         })
         return state.books[index]
      })
   }

   changeTab(index){
      this.setState(state=>{
         state.currentTab = state.data[index]
         state.currentBooks = this.getCurrentBooks(state, index)
         return state
      })
   }

   componentDidMount() {
      $(this.tab.current).readmore({num: 3})
      this.setState(state=>{
         state.currentBooks = this.getCurrentBooks(state, 0)
         return state
      })
   }

   componentDidUpdate(prevProps, prevState) {
      $(this.tab.current).readmore({num: 3})
   }

   toggleGallery(name, state, ...props){
      // preparation
      if(name === 'cert' || name === 'stud' || name === 'books'){
         if(state){ // open a modul win
            document.documentElement.style = 'overflow: hidden';
         } else{ // close module win
            document.documentElement.style = 'overflow-X: hidden; overflow-Y: visible;';
         }
      }
      // --------------

      switch (name) {
         //cert, stud, books
         case 'zoom':
            if(!state){ // close
               this.setState({showZoomed: state, zoomedItem: ''})
            } else{ // open
               this.setState({showZoomed: state, zoomedItem: props[0]})
            }
            break;
         default:
            this.setState({showBooks: state, booksGalMode: name})
            break;
      }
   }
   

   render() {
      console.log('render mode');
      console.log(window.g_Mode);
      let {data} = this.props
      let {currentTab} = this.state
      let {showBooks, selectedStudent, booksGalMode, students, currentBooks} = this.state;
      let booksGal = showBooks ? <BooksGallery books={currentBooks} students={students} student={selectedStudent} mode={booksGalMode} funcs={this}/> : '';


      let names = data.map((elem, index)=>{
         let activeState = ''
         if(data[index] === currentTab){
            activeState = 'is-active'
         }
         return (
            <div class={"tab__name " + activeState} data-target={elem.name.toLowerCase()} onClick={()=>this.changeTab(index)}>
               <p class="tab__name-text">{elem.name}</p>
            </div>
         )
      })

      let speakingThemes = currentTab.themes[0].content.split('\n').filter(elem=>{
         return elem !== ''
      }).map((elem, index)=>{
         return (<p className='info-block__text' key={index}>{elem}</p>)
      })

      let grammarThemes = currentTab.themes[1].content.split('\n').filter(elem=>{
         return elem !== ''
      }).map((elem, index)=>{
         return (<p className='info-block__text' key={index}>{elem}</p>)
      })

      let booksLink;
      if(currentTab.books.length > 0){
         booksLink = (
         <div class="tab__aside-item">
            <div class="tab__feature">
               <div class="feature">
                  <div class="feature__icon"><img src="img/icons/book.svg" alt=""/></div>
                  <a class="feature__text_link" data-action="see-books" onClick={()=>this.toggleGallery('books', true)}>Навчальні підручники</a>
               </div>
            </div>
         </div>
         )
      }

      return (
         <>
         <div class="tab" data-selector='tab-german' ref={this.tab}>
         <div class="tab__header-container container-md px-0 px-md-3">
            <div class="tab__header">
               {names}
            </div>
         </div>
         <div class="container-md g-0 g-md-3">
            <div class="row g-0">
               <div class="col-12">
                  <div class="tab__body is-visible" data-name='a1'>
                     <div class="tab__aside">
                        <div class="tab__aside-item">
                           <div class="tab__info-block info-block">
                              <p class="info-block__title">Про курс</p>
                              <p class="info-block__text">{currentTab.about}</p>
                           </div>
                        </div>
                        <div class="tab__aside-item">
                           <div class="tab__feature">
                              <div class="feature">
                                 <div class="feature__icon"><img src="img/icons/bricks.svg" alt=""/></div>
                                 <p class="feature__text">12 основних блоків</p>
                              </div>
                              <div class="feature">
                                 <div class="feature__icon"><img src="img/icons/clock.svg" alt=""/></div>
                                 <p class="feature__text">80 академічних годин</p>
                              </div>
                           </div>
                        </div>
                        <div class="tab__aside-item">
                           <div class="tab__info-block info-block">
                              <p class="info-block__title">Розвиток</p>
                              <ul class="info-block__list">
                                 <li class="info-block__list-item">Усного, писемного мовлення</li>
                                 <li class="info-block__list-item">Навичок слухання та читання</li>
                              </ul>
                           </div>
                        </div>
                        {booksLink}
                        <div class="tab__aside-item">
                           <p data-action='open-popup' class="btn btn--big" data-target="#consultation">Записатись</p>
                        </div>
                     </div>
                     <div class="tab__main">
                        <div class="tab__col">
                           <div class="tab__info-block info-block">
                              <p class="info-block__title">Розмовні теми / Konversation:</p>
                              <div class="info-block__body has-readmore">
                                 {speakingThemes}
                              </div>
                           </div>
                        </div>
                        <div class="tab__col">
                           <div class="tab__info-block info-block">
                              <p class="info-block__title">Граматичні теми / Grammatik:</p>
                              <div class="info-block__body has-readmore">
                                 {grammarThemes}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  {booksGal}
                  </>
      );
   }
}

export default CoursesSection;