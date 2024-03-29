$(document).ready(function () {

  // wow initiation
  new WOW().init();

  // navigation bar toggle
  $('#navbar-toggler').click(function () {
    $('.navbar-collapse').slideToggle(400);
  });

  // navbar bg change on scroll
  $(window).scroll(function () {
    let pos = $(window).scrollTop();
    if (pos >= 100) {
      $('.navbar').addClass('cng-navbar');
    } else {
      $('.navbar').removeClass('cng-navbar');
    }
  });

  // sample video popup
  $(document).ready(function () {
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
  });

  //pop up gallery
  $(document).ready(function() {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Carregando #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>Ward Engenharia e Arquitetura</small>';
        }
      }
    });
  });

  // team carousel 
  $('.team .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  // faq accordion
  $('.faq-head').each(function () {
    $(this).click(function () {
      $(this).next().toggleClass('show-faq-content');
      let icon = $(this).children('span').children("i").attr('class');

      if (icon == "fas fa-plus") {
        $(this).children('span').html('<i class = "fas fa-minus"></i>');
      } else {
        $(this).children('span').html('<i class = "fas fa-plus"></i>');
      }
    });
  });

  // testimonial carousel 
  $('.testimonial .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    nav: false,
    items: 1
  });

});

// $('.portfolio-item').isotope({
//  	itemSelector: '.item',
//  	layoutMode: 'fitRows'
//  });
$('.portfolio-menu ul li').click(function () {
  $('.portfolio-menu ul li').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
    filter: selector
  });
  return false;
});
$(document).ready(function () {
  var popup_btn = $('.popup-btn');
  popup_btn.magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

var onloadCallback = function() {
  alert("grecaptcha is ready!");
};

grecaptcha.render;

// function isIOS() {
//   var ua = navigator.userAgent.toLowerCase();

//   //Lista de dispositivos que acessar
//   var iosArray = ['iphone', 'ipod'];

//   var isApple = false;

//   //valida seu array
//   iosArray.forEach(function (item) {

//     if (ua.indexOf(iosArray[item]) != -1) {
//       isApple = true;
//     }

//   });

//   return isApple;
// }

// if (!isIOS()) {
//   $('header').css({
//     backgroundAttachment: 'fixed',
//   });
// }

// isIOS;

