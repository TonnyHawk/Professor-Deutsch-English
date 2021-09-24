import React, { Component } from 'react';

class Video extends Component {
   constructor(){
      super()
      this.state = {
         isPlaying: false
      }
   }
   componentDidMount(){
      let root = this
      this.video.addEventListener("playing", () => {
         root.setState({isPlaying: true})
       });
       
       this.video.addEventListener("pause", () => {
         root.setState({isPlaying: false})
       });
   }
   vidToggle(){
      if (this.state.isPlaying) {
         this.video.pause();
         this.videoBlock.classList.remove('is-on')
      } else{
         this.video.play();
         this.videoBlock.classList.add('is-on')
      }
   }
   render() {
      let {student} = this.props
      return (
         <div class="multilayer video" ref={c => this.videoBlock = c}>
         <div class="video__inner">
            <div class="video__hd">
               {/* <div class="video__info">
                  <p class="video__title">Богуцька Анна</p>
                  <p class="video__subtitle">Deutsch C1</p>
               </div> */}
               <div class="video__actions">
                  <div class="video__action video__action--volume">
                     <i class="bi bi-volume-up-fill"></i>
                  </div>
               </div>
            </div>
            <div class="video__play" onClick={()=>this.vidToggle()}>
               <div class="video__play-bg"></div>
               <div class="video__play-btn video__play-btn--play">
                  <i class="bi bi-play-fill"></i>
               </div>
            </div>
            <div class="video__bd">
               <video class="video__player" ref={c => this.video = c}>
                  <source src={student.video}/>
                Your browser does not support the video tag.
                </video>
            </div>
            <div class="video__ft">
               <div class="video__progress">
                  <div class="video__progress-bg"></div>
                  <div class="video__progress-main"></div>
               </div>
            </div>
         </div>
         {/* <div class="video__controll video__controll--next"></div>
         <div class="video__controll video__controll--prev"></div> */}
      </div>
      );
   }
}

export default Video;