function changeClass(){
  let siteNav = document.getElementById('menu');
    siteNav.classList.toggle('menu-active');
}

$(document).ready(function(){
    $('.cityguide__slider').slick({
      arrows: true,
      dots: true,
      infinite: false,
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
            slidesToShow: 1.6,
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

$(document).ready(function(){
  $('.programs__slider').slick({
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4.9,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2.9 ,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 746,
        settings: {
          adaptiveHeight: false,
          arrows: false,
          slidesToShow: 1.8,
          slidesToScroll: 1,
        }
      }
    ]
  });  
})

$(document).ready(function(){
  $('.gallery__slider').slick({
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 745,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1.7,
          slidesToScroll: 1,
        }
      }
    ]
  });  
})

$(document).ready(function(){
  $('.bussiness__slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4.57,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 3.6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 745,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });  
})

$(document).ready(function(){
  $('.opinion__slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 745,
        settings: {
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });  
})