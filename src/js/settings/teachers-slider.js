
   let sectionId = '#teachers';
   $(sectionId + ' .slide__texts-slider').on('init', function (event,
      slick) { // adding readmore with some delay to properly calculate the heights of cropped elements
      setTimeout(function () {
         $(sectionId).readmore({
            num: 1
         });
      }, 200)
   });
   $(sectionId + ' .slide__photos-slider').slick({
      arrow: true,
      variableWidth: true,
      centerMode: true,
      mobileFirst: true,
      asNavFor: sectionId + ' .slide__texts-slider',
      appendArrows: $(sectionId + ' .slider__controlls'),
      prevArrow: '<div class="slider__arrow-left"><img src="img/icons/slider-arrow-left.svg" alt=""></div>',
      nextArrow: '<div class="slider__arrow-right"><img src="img/icons/slider-arrow-right.svg" alt=""></div>',
      responsive: [{
         breakpoint: 992,
         settings: {
            centerMode: false,
         }
      }]
   });

   $(sectionId + ' .slide__texts-slider').slick({
      arrows: false,
      asNavFor: sectionId + ' .slide__photos-slider',
      mobileFirst: true,
      responsive: [{
         breakpoint: 992,
         settings: {
            fade: true,
         }
      }]
   });
