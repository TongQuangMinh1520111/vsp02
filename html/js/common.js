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

  $(".news_slider02").slick({
    slidesToShow: 3,
    infinite: true,
    dots: false,
    arrows: true,
    touchMove: true,
    pauseOnHover: false,
    autoplay: false,
    autoplaySpeed: 3000,
  });

  mvheight();
});





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
