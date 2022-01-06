import React, { Component } from 'react';
import {linkTo} from '../../../../../js/functions';
import ZoomedGal from '../../../../../gall/js/modules/ZoomedGal';

class GalleryShowcase extends Component {
   constructor(props){
      super(props)
      this.state = {
         showZoomed: false,
         zoomedItem: '',
      }
   }

   toggleGallery(name, state, ...props){
      // preparation
      // if(name === 'cert' || name === 'stud'){
         if(state){ // open a modul win
            document.documentElement.style = 'overflow: hidden';
         } else{ // close module win
            document.documentElement.style = 'overflow-X: hidden; overflow-Y: visible;';
         }
      // }
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
      let zoomedGal = this.state.showZoomed ? <ZoomedGal item={this.state.zoomedItem} funcs={this}/> : '';
      return (
         <>
   <div class="container">
      <div class="section__header">
         <h1 class="section__title">Галерея</h1>
         <div class="section__expand-btn feature hover-circled btn--accented linkTo">
            <div class="feature__icon hover-circled__icon"><i class="bi bi-collection"></i></div>
            <p class="feature__text" onClick={()=>linkTo(`gall/?what=gallery&prof=${this.props.prof}`)}>Більше</p>
         </div>
      </div>

      <div class="row g-0 gallery-showcase__main">
         <div class="col-12 col-md-6 col-xl-4">
            <div class="row g-0">
               <div class="col-12 p-2">
                  <div class="photo-sloth" onClick={()=>{this.toggleGallery('zoom', true, {name: 'hello', photo: "img/gallery-showcase/8.jpg", about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita dicta odio natus vel tempora voluptate, soluta ipsam quod necessitatibus corrupti nostrum obcaecati architecto voluptas ducimus quis ab sequi molestias enim.'})}}>
                     <img class="photo-sloth__image lazyload" src="img/gallery-showcase/8.jpg" alt=""/>
                     <div class="photo-sloth__layer">
                        <div class="photo-sloth__layer-bg"></div>
                        <div class="photo-sloth__layer-text-wrap">
                           <p class="photo-sloth__layer-title">Title boy</p>
                           <p class="photo-sloth__layer-descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              Illo ducimus, quae, mollitia dolore in aperiam iste doloremque</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row g-0">
               <div class="col p-2">
                  <div class="photo-sloth">
                     <img class="photo-sloth__image lazyload" src="img/gallery-showcase/2.jpg" alt=""/>
                     <div class="photo-sloth__layer">
                        <div class="photo-sloth__layer-bg"></div>
                        <div class="photo-sloth__layer-text-wrap">
                           <p class="photo-sloth__layer-title">Title boy</p>
                           <p class="photo-sloth__layer-descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              Illo ducimus, quae, mollitia dolore in aperiam iste doloremque</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col p-2">
                  <div class="photo-sloth">
                     <img class="photo-sloth__image lazyload" src="img/gallery-showcase/3.jpg" alt=""/>
                     <div class="photo-sloth__layer">
                        <div class="photo-sloth__layer-bg"></div>
                        <div class="photo-sloth__layer-text-wrap">
                           <p class="photo-sloth__layer-title">Title boy</p>
                           <p class="photo-sloth__layer-descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              Illo ducimus, quae, mollitia dolore in aperiam iste doloremque</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-12 col-md-6 col-xl-3 p-2">
            <div class="photo-sloth photo-sloth--fluid">
               <img class="photo-sloth__image lazyload" src="img/gallery-showcase/4.jpg" alt=""/>
               <div class="photo-sloth__layer">
                  <div class="photo-sloth__layer-bg"></div>
                  <div class="photo-sloth__layer-text-wrap">
                     <p class="photo-sloth__layer-title">Title boy</p>
                     <p class="photo-sloth__layer-descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Illo ducimus, quae, mollitia dolore in aperiam iste doloremque</p>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-12 col-md-12 col-xl-5 d-none d-md-block">
            <div class="row g-0">
               <div class="col-12 col-md-6 col-xl-5 p-2">
                  <div class="photo-sloth">
                     <img class="photo-sloth__image lazyload" src="img/gallery-showcase/5.jpg" alt=""/>
                     <div class="photo-sloth__layer">
                        <div class="photo-sloth__layer-bg"></div>
                        <div class="photo-sloth__layer-text-wrap">
                           <p class="photo-sloth__layer-title">Title boy</p>
                           <p class="photo-sloth__layer-descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              Illo ducimus, quae, mollitia dolore in aperiam iste doloremque</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-12 col-md-6 col-xl-7 p-2">
                  <div class="photo-sloth">
                     <img class="photo-sloth__image lazyload" src="img/gallery-showcase/6.jpg" alt=""/>
                     <div class="photo-sloth__layer">
                        <div class="photo-sloth__layer-bg"></div>
                        <div class="photo-sloth__layer-text-wrap">
                           <p class="photo-sloth__layer-title">Title boy</p>
                           <p class="photo-sloth__layer-descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              Illo ducimus, quae, mollitia dolore in aperiam iste doloremque</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row g-0 d-none d-xl-flex">
               <div class="col-12 col-md-6 p-2">
                  <div class="photo-sloth">
                     <img class="photo-sloth__image lazyload" src="img/gallery-showcase/7.jpg" alt=""/>
                     <div class="photo-sloth__layer">
                        <div class="photo-sloth__layer-bg"></div>
                        <div class="photo-sloth__layer-text-wrap">
                           <p class="photo-sloth__layer-title">Title boy</p>
                           <p class="photo-sloth__layer-descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              Illo ducimus, quae, mollitia dolore in aperiam iste doloremque</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-12 col-md-6 p-2">
                  <div class="photo-sloth">
                     <img class="photo-sloth__image lazyload" src="img/gallery-showcase/1.jpg" alt=""/>
                     <div class="photo-sloth__layer">
                        <div class="photo-sloth__layer-bg"></div>
                        <div class="photo-sloth__layer-text-wrap">
                           <p class="photo-sloth__layer-title">Title boy</p>
                           <p class="photo-sloth__layer-descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              Illo ducimus, quae, mollitia dolore in aperiam iste doloremque</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   {zoomedGal}
      </>
      );
   }
}

export default GalleryShowcase;