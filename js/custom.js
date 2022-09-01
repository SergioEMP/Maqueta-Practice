const iconMenu = document.querySelector('#icon__menu'),
  menu = document.querySelector('#menu');
  
  iconMenu.addEventListener('click', (e) => {

    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
  })

$(document).ready(function(){
    $('.cityguide__slider').slick({
      arrows: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2.6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1365,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1023,
          settings: {
            arrows:false,
            slidesToShow: 1.5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 746,
          settings: {
            slidesToShow: 1.12,
            slidesToScroll: 1,
          }
        }
      ]
    });  
})

$(document).ready(function(){
  $('.news__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });  
})