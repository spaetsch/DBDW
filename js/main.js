$(document).ready(function(){
  $('.carousel').slick({
  infinite: true,
  slidesToShow: 1,
  //autoplay: true,
  dots: true,
 // adaptiveHeight: true,
  speed: 500,
  mobileFirst: true,
  centerPadding: '1em',

  centerMode: true,
  responsive: [
    {
      breakpoint: '$breakpoint-med',
      settings: {
        slidesToShow: 3,
        centerPadding: '2em'
      }
    }
    // {
    //   breakpoint: 480,
    //   settings: {

    //     slidesToShow: 1
    //   }
    // }
  ]
  });
});
