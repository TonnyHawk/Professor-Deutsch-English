import React, { Component } from 'react';

class IntroSection extends Component {
   render() {
      let {dispatch, setLang} = this.props
      return (
         <>
            {/* <!-- <div class="intro__screen intro__screen--left ibg" data-intro='g'>
               <img src="img/preloader/a8.jpg" alt="">
            </div>
            <div class="intro__screen intro__screen--right ibg" data-intro='e'>
               <img src="img/preloader/1.jpg" alt="">
            </div> --> */}
            <div class="intro__screen intro__screen--fluid ibg" data-intro='e'>
               <img src="https://ucarecdn.com/13fb9c04-eaf4-49a6-a2bf-09e05891056b/-/quality/smart_retina/-/exposure/-70/-/preview/" alt=""/>
            </div>
            <div class="intro__info intro__info--seccond" data-intro='g'>
            <p class="intro__info-pretitle">Мені цікава</p>
            <p class="intro__info-title">Німецька</p>
            <p class="intro__action intro__action--left" data-mode='Deutsch' onClick={()=>dispatch(setLang('Deutsch'))}>Обрати мову</p>
            </div>
            <div class="intro__info intro__info--first" data-intro='e'>
            <p class="intro__info-pretitle">Мені цікава</p>
            <p class="intro__info-title">Англійська</p>
            <p class="intro__action intro__action--right" data-mode='English' onClick={()=>dispatch(setLang('English'))}>Обрати мову</p>
            </div>
            {/* <!-- <p class="intro__action intro__action--left" data-mode='g'>Німецька</p>
            <p class="intro__action intro__action--right" data-mode='e'>Англійська</p> --> */}
            <div class="intro__layer"></div>
         </>
      );
   }
}

export default IntroSection;