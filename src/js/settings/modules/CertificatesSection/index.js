import React, { Component } from 'react';
import BooksGallery from '../BooksGallery';

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
   toggleGallery(name, state, ...props){
      // preparation
      if(name === 'cert' || name === 'stud'){
         if(state){ // open a modul win
            document.documentElement.style = 'overflow: hidden';
         } else{ // close module win
            document.documentElement.style = 'overflow-X: hidden; overflow-Y: visible;';
         }
      }
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
      let {showBooks, selectedStudent, booksGalMode, students, certificates} = this.state;
      let booksGal = showBooks ? <BooksGallery certificates={certificates} students={students} student={selectedStudent} mode={booksGalMode} funcs={this}/> : '';
      return (
         <>
      <div class="container-md">
         <div class="row">
            <div class="col-12 col-lg-7">
               <div class="certificates__cert-group">
                  <div class="certificates__cert-group-item">
                     <img src="img/certificates-section/ielts.jpg" alt=""/>
                  </div>
                  <div class="certificates__cert-group-layer">
                     <div class="certificates__cert-group-item certificates__cert-group-item--main">
                        <img src="img/certificates-section/b2.jpg" alt=""/>
                     </div>
                  </div>
                  <div class="certificates__cert-group-item">
                     <img src="img/certificates-section/ielts.jpg" alt=""/>
                  </div>
               </div>
            </div>
            <div class="col-12 col-lg-5">
               <div class="certificates__info">
                  <p class="certificates__title">Наш спільний успіх підтверджено низкою сертифікатів</p>
                  <p class="certificates__my-btn" onClick={()=>this.toggleGallery('cert', true)}>Переглянути всі</p>
               </div>
            </div>
         </div>
      </div>
      {booksGal}
      </>
      );
   }
}

export default CertificatesSection;