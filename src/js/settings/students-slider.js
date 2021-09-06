 let sectionId = "#students"

 $(sectionId + ' .sl__preview').slick({
   adaptiveHeight: true,
   centerMode: true,
   mobileFirst: true,
   variableWidth: true,
   arrows: false,
   asNavFor: sectionId + ' .sl__main',
   infinite: false,
   responsive: [{
    breakpoint: 992,
    settings: {
      adaptiveHeight: false,
      focusOnSelect: true
    }
  }]
 });

 $(sectionId + ' .sl__main').slick({
   adaptiveHeight: true,
   mobileFirst: true,
   arrows: false,
   asNavFor: sectionId + ' .sl__preview',
   infinite: false,
 });