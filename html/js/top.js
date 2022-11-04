$(document).ready(function () {
  "use strict";
  $(".mainv_slider").slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    touchMove: true,
    pauseOnHover: false,
    autoplay: false,
    autoplaySpeed: 3000,
  });
  $(".product_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    touchMove: true,
    pauseOnHover: false,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".banner_slider").slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    touchMove: true,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $(".related_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: false,
    touchMove: true,
    arrows: true,
    pauseOnHover: false,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  if ($(window).width() < 1025) {
    $(".news_slider").slick({
      slidesToShow: 1,
      infinite: true,
      dots: true,
      arrows: false,
      touchMove: true,
      pauseOnHover: false,
      autoplay: false,
      autoplaySpeed: 3000,
    });
  }

  $("#footer .footer_box01 .card").matchHeight();
  $("#footer .footer_box01 .f_list01 dl").matchHeight();
  if ($(window).width() > 768) {
    $("#h_box04 .product-list .item img").matchHeight();
  }
});
