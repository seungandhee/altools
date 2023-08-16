// SLICK JS : VISUAL-SLIDER
$('.visual-slider').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 7000,
  speed: 800,
  fade: true,
  cssEase: 'linear'
});

// SLICK JS : NOTICE-SLIDER
$('.notice-slider').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 600,
  vertical: true,
  arrows: false
});

// SLICK JS : SHORCUT-SLIDER
$('.shortcut-slider').slick({
  arrows: false,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 8,
  slidesToScroll: 8,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1360,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true
      }
    } ,
    {
      breakpoint: 1184,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true
      }
    } ,
    {
      breakpoint: 1038,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1
      }
    } ,
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true
      }
    } ,
    {
      breakpoint: 734,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true
      }
    } ,
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
      }
    } ,
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
      }
    }
  ]
});

// SLICK JS : NEW-SLIDER
$('.new-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// NAVIGATION
let gnbEl = $('.gnb li');

$(gnbEl).click(function(){
  $(this).toggleClass('on').children('.submenu').stop().slideToggle(300);
  $(this).siblings().removeClass('on');
  $(this).siblings().children('.submenu').slideUp(300);
});

  $('.trigger').click(function(){
  $(this).toggleClass('on');
  $('nav').toggleClass('on');
  if($(gnbEl).hasClass('on') == true){
    $(gnbEl).removeClass('on');
    $(gnbEl).siblings().children('.submenu').slideUp();
  }
});

// HEADER FIXED
let headerEl = document.querySelector('header');

window.addEventListener('scroll', function(){
  let scrollY = this.scrollY;

  if(scrollY > 2){
    headerEl.classList.add('active')
  } else {
    headerEl.classList.remove('active');
  }
})

















