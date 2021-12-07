import React, { Component } from 'react';
import smoothScroll from '../../../vendors/smoothScroll';
import {linkTo} from '../../../../../js/functions'

class CoursesSection extends Component {
   constructor(props){
      super(props)
      this.state = {
         data: props.data, // courses info here
         currentTab: props.data[0],
         currentBooks: [],
         showBooks: false,
         selectedStudent: [],
         booksGalMode: '',
      }

      this.tab = React.createRef()
   }

   changeTab(index){
      this.setState(state=>{
         state.currentTab = state.data[index]
         return state
      })
   }

   componentDidMount() {
      $(this.tab.current).readmore({num: 3})
      smoothScroll(this.tab.current);
   }

   componentDidUpdate(prevProps, prevState) {
      $(this.tab.current).readmore({num: 3})
   }
   

   render() {
      let {data} = this.props
      let {currentTab} = this.state


      let names = data.map((elem, index)=>{
         let activeState = ''
         if(data[index] === currentTab){
            activeState = 'is-active'
         }
         return (
            <div key={elem._id} className={"tab__name " + activeState} data-target={elem.name.toLowerCase()} onClick={()=>this.changeTab(index)}>
               <p className="tab__name-text">{elem.name}</p>
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
         <div className="tab__aside-item">
            <div className="tab__feature">
               <div className="feature">
                  <div className="feature__icon"><img src="img/icons/book.svg" alt=""/></div>
                  <a className="feature__text_link" style={{cursor: 'pointer'}} data-action="see-books" onClick={()=>linkTo(`gall/?what=course-books&id=${currentTab._id}&prof=${this.props.prof}`)}>Навчальні підручники</a>
               </div>
            </div>
         </div>
         )
      }

      return (
         <>
      <div className="tab" ref={this.tab}>
         <div className="tab__header-container container-md px-0 px-md-3">
            <div className="tab__header">
               {names}
            </div>
         </div>
         <div className="container-md g-0 g-md-3">
            <div className="row g-0">
               <div className="col-12">
                  <div className="tab__body is-visible" data-name='a1'>
                     <div className="tab__aside">
                        <div className="tab__aside-item">
                           <div className="tab__info-block info-block">
                              <p className="info-block__title">Про курс</p>
                              <p className="info-block__text">{currentTab.about}</p>
                           </div>
                        </div>
                        <div className="tab__aside-item">
                           <div className="tab__feature">
                              <div className="feature">
                                 <div className="feature__icon"><img src="img/icons/bricks.svg" alt=""/></div>
                                 <p className="feature__text">12 основних блоків</p>
                              </div>
                              <div className="feature">
                                 <div className="feature__icon"><img src="img/icons/clock.svg" alt=""/></div>
                                 <p className="feature__text">80 академічних годин</p>
                              </div>
                           </div>
                        </div>
                        <div className="tab__aside-item">
                           <div className="tab__info-block info-block">
                              <p className="info-block__title">Розвиток</p>
                              <ul className="info-block__list">
                                 <li className="info-block__list-item">Усного, писемного мовлення</li>
                                 <li className="info-block__list-item">Навичок слухання та читання</li>
                              </ul>
                           </div>
                        </div>
                        {booksLink}
                        <div className="tab__aside-item">
                           <p data-action='open-popup' className="btn btn--big" data-target="#consultation">Записатись</p>
                        </div>
                     </div>
                     <div className="tab__main">
                        <div className="tab__col">
                           <div className="tab__info-block info-block">
                              <p className="info-block__title">Розмовні теми:</p>
                              <div className="info-block__body has-readmore">
                                 {speakingThemes}
                              </div>
                           </div>
                        </div>
                        <div className="tab__col">
                           <div className="tab__info-block info-block">
                              <p className="info-block__title">Граматичні теми:</p>
                              <div className="info-block__body has-readmore">
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
                  </>
      );
   }
}

export default CoursesSection;