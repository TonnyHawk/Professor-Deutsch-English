import React, { Component } from 'react';

class CustomPreviewSlide extends Component {
   render() {
      const { student, ...props } = this.props;
      return (
         <div class="sl__prev-item multilayer">
            <img src={student.photo} alt="" class="multilayer__main"/>
         </div>
      );
   }
}

export default CustomPreviewSlide;
