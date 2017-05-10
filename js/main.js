$(document).ready(function() {

  var $headerContext = $('.x-header');
  var $burgerMenu = $('.x-burger-menu', $headerContext);

  $burgerMenu.on('click', function() {
    $('.x-mobile-navigation', $headerContext).slideToggle('mobile-navigation--active');
    setTimeout(function () {
      $burgerMenu.toggleClass('main-navigation__burger-menu--active');
    }, 300);
  });

  // first-screen-slider

  $('.x-first-screen-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  });
});
