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
         <div className="multilayer video" ref={c => this.videoBlock = c}>
         <div className="video__inner">
            <div className="video__hd">
               {/* <div className="video__info">
                  <p className="video__title">Богуцька Анна</p>
                  <p className="video__subtitle">Deutsch C1</p>
               </div> */}
               <div className="video__actions">
                  <div className="video__action video__action--volume">
                     <i className="bi bi-volume-up-fill"></i>
                  </div>
               </div>
            </div>
            <div className="video__play" onClick={()=>this.vidToggle()}>
               <div className="video__play-bg"></div>
               <div className="video__play-btn video__play-btn--play">
                  <i className="bi bi-play-fill"></i>
               </div>
            </div>
            <div className="video__bd">
               <video className="video__player" ref={c => this.video = c}>
                  <source src={student.video}/>
                Your browser does not support the video tag.
                </video>
            </div>
            <div className="video__ft">
               <div className="video__progress">
                  <div className="video__progress-bg"></div>
                  <div className="video__progress-main"></div>
               </div>
            </div>
         </div>
         {/* <div className="video__controll video__controll--next"></div>
         <div className="video__controll video__controll--prev"></div> */}
      </div>
      );
   }
}

export default Video;