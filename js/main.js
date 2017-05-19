$(document).ready(function() {

  var $headerContext = $('.x-header');

  // header active class
  var $headerLinks = $('.x-header-link', $headerContext);

  $headerLinks.each(function(i) {
    var url = location.href.substring(location.href.lastIndexOf('/'));
    var href = $(this).attr('data-href') + '';
    href = href.substring(href.indexOf('.') + 1);

    if (url === href) {
      $(this).addClass('main-navigation__link--active');
    }
  });

  // header-mobile
  var $burgerMenu = $('.x-burger-menu', $headerContext);

  $burgerMenu.on('click', function() {
    $('.x-mobile-navigation', $headerContext).slideToggle('mobile-navigation--active');
    setTimeout(function () {
      $burgerMenu.toggleClass('main-navigation__burger-menu--active');
    }, 300);
  });

  // more link

  (function () {
    var timerId;
    $('.x-more-link').on('mouseover', function (event) {
      $('.x-more-block').addClass('navigation-more--active');
      clearInterval(timerId);
    });

    $('.x-more-link').on('mouseleave', function (event) {
      timerId = setTimeout(function () {
        $('.x-more-block').removeClass('navigation-more--active');
      }, 500);
    });
  }());

  // temporary navigastion

  $('.x-link-hotel').on('click', function () {
    location.href = './hotel.html';
  });

  $('.x-link-restaurants').on('click', function () {
    location.href = './restaurants.html';
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

  // scroll main-page

  $('.x-scroll').on('click', function() {
    if (location.href.substring(location.href.lastIndexOf('/')) === '/') {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
          duration: 500,
          easing: "swing"
      });
      return false;
    } else {
      var href = $(this).attr('data-href').toString();
      if (href === './index.html') {
        href = './';
      }
      location.href = href;
    }
  });

  // contacts map

  if (YMaps) {
    YMaps.jQuery(function () {
      var mapId = $('#YMapsID');

      if (mapId.length > 0) {
        var map = new YMaps.Map(YMaps.jQuery(mapId)[0]);
        var centerX = parseFloat(mapId.attr('center-x'));
        var centerY = parseFloat(mapId.attr('center-y'));
        var markGeo1X = mapId.attr('mark-geo1-x');
        var markGeo1Y = mapId.attr('mark-geo1-y');
        var markGeo2X = mapId.attr('mark-geo2-x');
        var markGeo2Y = mapId.attr('mark-geo2-y');
        var markGeo3X = mapId.attr('mark-geo3-x');
        var markGeo3Y = mapId.attr('mark-geo3-y');

        map.setCenter(new YMaps.GeoPoint(centerX, centerY), 13);

        // create style
        var myMark = new YMaps.Style();

        // create map-marker style
        myMark.iconStyle = new YMaps.IconStyle();
        myMark.iconStyle.href = "https://larry6767.github.io//img/map-marker.svg";
        myMark.iconStyle.size = new YMaps.Point(32, 32);
        myMark.iconStyle.offset = new YMaps.Point(-16, -16);

        var placemark = new YMaps.Placemark(new YMaps.GeoPoint(markGeo1X, markGeo1Y), { style: myMark });
        var placemark2 = new YMaps.Placemark(new YMaps.GeoPoint(markGeo2X, markGeo2Y), { style: myMark });
        var placemark3 = new YMaps.Placemark(new YMaps.GeoPoint(markGeo3X, markGeo3Y), { style: myMark });

        placemark.name = mapId.attr('name1');
        placemark.description = mapId.attr('hint1');

        placemark2.name = mapId.attr('name2');
        placemark2.description = mapId.attr('hint2');

        placemark3.name = mapId.attr('name3');
        placemark3.description = mapId.attr('hint3');

        map.addOverlay(placemark);
        map.addOverlay(placemark2);
        map.addOverlay(placemark3);
      }
    });
  }

  // hotel page
  var $hotelContext = $('.x-hotel-page');

  $('.x-more', $hotelContext).on('click', function () {
    $('.x-more-text', $hotelContext).slideToggle('hotel-description__text--active');
    $(this).toggleClass('hotel-description__more--active');
  });

  $('.x-hotel-spa-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  });

  // lighbox option

  lightbox.option({
    'disableScrolling': true,
    'albumLabel'      : 'Фото %1 из %2'
  });

  var $roomsContext = $('.x-room');

  $('.x-room-album', $roomsContext).on('click', function () {
    var $localContext = $(this).closest('.x-room');

    $('.x-target-lightbox', $localContext).click();
  });

  // restaurants page

  var $restaurantsContext = $('.x-restaurants-page');

  $('.x-more', $restaurantsContext).on('click', function () {
    $('.x-more-text', $restaurantsContext).slideToggle('restaurants-description__text--active');
    $(this).toggleClass('resraurants-description__more--active');
  });

  $('.x-restaurants-menu-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  });

});

window.addEventListener('scroll', function (event) {

  var depth, i, layer, layers, len, movement, topDistance, translate3d;
  topDistance = this.pageYOffset;
  layers = document.querySelectorAll('[data-type=\'parallax\']');

  for (i = 0, len = layers.length; i < len; i++) {

    layer = layers[i];
    depth = layer.getAttribute('data-depth');
    movement = -(topDistance * depth);
    translate3d = 'translate3d(0, ' + movement + 'px, 0)';
    layer.style['-webkit-transform'] = translate3d;
    layer.style['-moz-transform'] = translate3d;
    layer.style['-ms-transform'] = translate3d;
    layer.style['-o-transform'] = translate3d;
    layer.style.transform = translate3d;
  }

});
