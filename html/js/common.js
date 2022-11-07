$(document).ready(function () {
  "use strict";

  var _boxes = $(".overlay");
  _boxes.bind("lightup", function () {
    setTimeout(function () {
      $(".overlay").removeClass("overlay-hide");
    }, 400);
  });

  $(".hamburger").click(function (e) {
    e.preventDefault();
    $("#header").toggleClass("active");
    $("body").toggleClass("overflowhide");
    $(this).toggleClass("active");
    var _this = $(".overlay");
    _this.toggleClass("overlay-show");
    if (_this.hasClass("overlay-hide")) {
      _this.trigger("lightup");
    } else {
      $(".overlay").removeClass("overlay-hide");
      _this.addClass("overlay-hide");
    }
  });

  if ($(window).width() < 769) {
    $("#header li.sub").each(function (e) {
      $(this).click(function () {
        $(this).toggleClass("active");
        $(this).find(".menu-sub").slideToggle();
      });
    });

    $("#footer .footer_box02 .f-ttl").each(function (e) {
      $(this).click(function () {
        $(this).parent().toggleClass("active");
        $(this).parent().find("ul").slideToggle();
      });
    });
    $(window).on("load resize scroll", function (e) {
      var h = $("#header").innerHeight();
      $("#header #gnavi").css({ height: `calc(100vh - ${h}px`, top: `${h}px` });
    });
  }
  mvheight();
  if ($("#news").length) {
    newSlider02();
    moreNew();
    if ($(window).width() < 1025) {
      newSlider01();
    }
    if ($(window).width() > 768) {
      $("#h_box04 .product-list .item img").matchHeight();
    }

    if ($(window).width() > 576) {
      $(".news_list").each(function (e) {
        $(".news_list").eq(e).find("li figure").matchHeight();
      });
    }
  }
  if ($("#product").length) {
    productSlider();
    $(".product_list img").matchHeight();
  }
  if ($("#product-detail").length) {
    productSlider01();
    $(".product_list01 img").matchHeight();
  }
});

function newSlider01() {
  $(".news_slider01").slick({
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
function newSlider02() {
  $(".news_slider02").slick({
    slidesToShow: 3,
    infinite: true,
    dots: false,
    arrows: true,
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
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

function moreNew() {
  $("#news_box02 .news_list li").each(function (e) {
    if ($(window).width() > 1024 && e >= 9) {
      showMoreNews(e);
    } else if ($(window).width() > 576 && $(window).width() < 1025 && e >= 6) {
      showMoreNews(e);
    } else if ($(window).width() < 577 && e >= 3) {
      showMoreNews(e);
    }
  });
}
function showMoreNews(e) {
  $("#news_box02 .btn_more").show();
  $("#news_box02 .news_list li").eq(e).hide();
  $("#news_box02 .btn_more").click(function () {
    $("#news_box02 .news_list li").show();
    $("#news_box02 .btn_more").hide();
  });
}
function productSlider() {
  $(".product_slider").slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    touchMove: false,
    pauseOnHover: false,
    autoplay: false,
    autoplaySpeed: 3000,
  });
}

function productSlider01() {
  $(".product01_slider").slick({
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

function mvheight() {
  var setVhCustomVar = function () {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");
  };

  setVhCustomVar();

  window.addEventListener(
    "load",
    function () {
      setVhCustomVar();
    },
    false
  );

  window.addEventListener(
    "orientationchange",
    function () {
      setTimeout(function () {
        setVhCustomVar();
      }, 400);
    },
    false
  );
}
