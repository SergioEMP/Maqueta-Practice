const iconMenu = document.querySelector('#icon__menu'),
  menu = document.querySelector('#menu');
  
  iconMenu.addEventListener('click', (e) => {

    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
  })

$(document).ready(function(){
    $('.cityguide__slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2.8,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 744,
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