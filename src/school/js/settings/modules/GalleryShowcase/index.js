import React, { Component } from 'react';
import {linkTo, generateMediaThing, textElipsizer} from '../../../../../js/functions';
import ZoomedGal from '../../../../../gall/js/modules/ZoomedGal';

function sort(arr){
   return arr.sort()
}

function videoGenerator(link){
   let styles = {
      width: '100%',
      borderRadius: '0.9rem'
   }
   return (
      <>
         <video class="photo-sloth__image" preload="metadata" style={styles}>
            <source src={link} type="video/mp4"/>
            Your browser does not support the video tag.
         </video>
      </>
   )
}

function imageGenerator(link){
   return (<img src={link} class="photo-sloth__image lazyload" alt=""/>)
}

class GalleryShowcase extends Component {
   constructor(props){
      super(props)
      this.state = {
         showZoomed: false,
         zoomedItem: '',
      }
      // processing the data
      let slotExample = {
         name: 'Це місце вільне',
         about: 'Тут може бути показаний пост з галереї',
         photo: 'img/gallery-showcase/empty.jpg',
      };
      this.data = []
      for(let i = 0; i < 8; i++){
         let elem = props.data.find(elem=>elem.showcase == i)
         if(typeof elem !== 'undefined') this.data.push(elem)
         else this.data.push(slotExample)
      }
   }

   toggleGallery(name, state, ...props){
      // preparation
         if(state){ // open a modul win
            document.documentElement.style = 'overflow: hidden';
         } else{ // close module win
            document.documentElement.style = 'overflow-X: hidden; overflow-Y: visible;';
         }
      // --------------

      switch (name) {
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
      let {data} = this;

      let sloths = data.map((elem, index)=>{
         let clssName = ''
         if(index === 3){
            clssName += 'photo-sloth--fluid'
         }

         let mediaThing = generateMediaThing(elem, videoGenerator, imageGenerator)

         let videoLayer = '';
         if(typeof elem.media !== 'undefined'){
            if(elem.media.type === 'video'){
               videoLayer = (
                  <div className="play-layer">
                     <div className="play-layer__bg"></div>
                     <div className="play-layer__btn play-layer__btn--play">
                        <i className="bi bi-play-fill"></i>
                     </div>
                  </div>
               )
            }
         }
         return (
         <div class={`photo-sloth ${clssName}`} onClick={()=>{this.toggleGallery('zoom', true, elem)}}>
            {mediaThing}
            {videoLayer}
            <div class="photo-sloth__layer">
               <div class="photo-sloth__layer-bg"></div>
               <div class="photo-sloth__layer-text-wrap">
                  <p class="photo-sloth__layer-title">{textElipsizer(elem.name, 68)}</p>
                  <p class="photo-sloth__layer-descr">{textElipsizer(elem.about, 170)}</p>
               </div>
            </div>
         </div>
         )
      })

      return (
         <>
   <div class="container">
      <div class="section__header">
         <h1 class="section__title">Галерея</h1>
         <div class="section__expand-btn feature hover-circled btn--accented linkTo" onClick={()=>linkTo(`gall/?what=gallery&prof=${this.props.prof}`)}>
            <div class="feature__icon hover-circled__icon"><i class="bi bi-collection"></i></div>
            <p class="feature__text">Більше</p>
         </div>
      </div>

      <div class="row g-0 gallery-showcase__main">
         <div class="col-12 col-md-6 col-xl-4">
            <div class="row g-0">
               <div class="col-12 p-2">
                  {sloths[7]}
               </div>
            </div>
            <div class="row g-0">
               <div class="col p-2">
                  {sloths[1]}
               </div>
               <div class="col p-2">
                  {sloths[2]}
               </div>
            </div>
         </div>
         <div class="col-12 col-md-6 col-xl-3 p-2">
            {sloths[3]}
         </div>
         <div class="col-12 col-md-12 col-xl-5 d-none d-md-block">
            <div class="row g-0">
               <div class="col-12 col-md-6 col-xl-5 p-2">
                  {sloths[4]}
               </div>
               <div class="col-12 col-md-6 col-xl-7 p-2">
                  {sloths[5]}
               </div>
            </div>
            <div class="row g-0 d-none d-xl-flex">
               <div class="col-12 col-md-6 p-2">
                  {sloths[6]}
               </div>
               <div class="col-12 col-md-6 p-2">
                  {sloths[0]}
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