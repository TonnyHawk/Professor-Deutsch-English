import React, { Component } from 'react';
import {linkTo} from '../../../functions';

class CertificatesSection extends Component {
   constructor(props) {
      super(props);
      this.state = {
         nav1: null,
         nav2: null,
         showBooks: false,
         selectedStudent: [],
         booksGalMode: '',
         showZoomed: false,
         zoomedItem: '',
         students: props.students,
         certificates: props.certificates
      };
    }
   render() {
      return (
         <>
      <div className="container-md">
         <div className="row">
            <div className="col-12 col-lg-7">
               <div className="certificates__cert-group">
                  <div className="certificates__cert-group-item">
                     <img src="img/certificates-section/ielts.jpg" alt=""/>
                  </div>
                  <div className="certificates__cert-group-layer">
                     <div className="certificates__cert-group-item certificates__cert-group-item--main">
                        <img src="img/certificates-section/b2.jpg" alt=""/>
                     </div>
                  </div>
                  <div className="certificates__cert-group-item">
                     <img src="img/certificates-section/ielts.jpg" alt=""/>
                  </div>
               </div>
            </div>
            <div className="col-12 col-lg-5">
               <div className="certificates__info">
                  <p className="certificates__title">Наш спільний успіх підтверджено низкою сертифікатів</p>
                  <p className="certificates__my-btn" onClick={()=>linkTo('gall/?what=cert&prof=Deutsch')}>Переглянути всі</p>
               </div>
            </div>
         </div>
      </div>
      </>
      );
   }
}

export default CertificatesSection;