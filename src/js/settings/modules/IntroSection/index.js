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
         <>
         <section className="intro" ref={this.rootElem}>
            {/* <!-- <div className="intro__screen intro__screen--left ibg" data-intro='g'>
               <img src="img/preloader/a8.jpg" alt="">
            </div>
            <div className="intro__screen intro__screen--right ibg" data-intro='e'>
               <img src="img/preloader/1.jpg" alt="">
            </div> --> */}
            <div className="intro__screen intro__screen--fluid ibg" data-intro='e'>
               <img src="img/intro/img.jfif" alt=""/>
            </div>
            <div className="intro__info intro__info--seccond" data-intro='g'>
            <p className="intro__info-pretitle">Professor Deutsch</p>
            <p className="intro__info-title">Німецька</p>
            <p className="intro__action intro__action--left" data-mode='Deutsch' onClick={()=>this.handleClick('Deutsch')}>Обрати школу</p>
            </div>
            <div className="intro__info intro__info--first" data-intro='e'>
            <p className="intro__info-pretitle">Professor English</p>
            <p className="intro__info-title">Англійська</p>
            <p className="intro__action intro__action--right" data-mode='English' onClick={()=>this.handleClick('English')}>Обрати школу</p>
            </div>
            {/* <!-- <p className="intro__action intro__action--left" data-mode='g'>Німецька</p>
            <p className="intro__action intro__action--right" data-mode='e'>Англійська</p> --> */}
            <div className="intro__layer"></div>
         </section>
         </>
      );
   }
}

export default IntroSection;