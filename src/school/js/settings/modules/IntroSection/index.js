import React, { Component } from 'react';
import {ibg} from '../../../my/globals';

class IntroSection extends Component {
   rootElem = React.createRef()

   componentDidMount() {
      let {rootElem} = this
      this.handleClick = (lang)=>{
         let {dispatch, setLang} = this.props
         dispatch(setLang(lang))
         // $(this.rootElem.current).hide()
         setTimeout(function(){
            $(rootElem.current).addClass('is-hidden');
            $('html').css('overflow-y', 'auto');
            window.scrollTo(0, 0);
         }, 1)
      }

      ibg()
   }
   
   render() {

      return (
      <section class="intro" ref={this.rootElem}>
         <div class="intro__inner">
           <div class="intro__logo logo">
             <p class="logo__first-line">Школа вивчення іноземних мов</p>
             <p class="logo__main-text">Professor</p>
             <p class="logo__last-line">Deutsch & English</p>
           </div>
           <div class="intro__half-screen intro__half-screen--first">
             <p class="intro__action" onClick={()=>this.handleClick('Deutsch')}>Німецька</p>
           </div>
           <div class="intro__half-screen intro__half-screen--seccond">
             <p class="intro__action" onClick={()=>this.handleClick('English')}>Англійська</p>
           </div>
         </div>
         <div class="intro__bg ibg"><img src="img/intro/img.jfif" alt=""/></div>
       </section>
      )
   }
}

export default IntroSection;