$(document).ready(function () {
  // slider
  $(".slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // centerMode: true,
  });


  // scroll
   const btn = $(".btn-scroll");
   $(window).scroll(function () {
     if ($(window).scrollTop() > 500) {
       btn.addClass("show");
     } else {
       btn.removeClass("show");
     }
   });
   btn.on("click", function (e) {
     e.preventDefault();
     $("html, body").animate({ scrollTop: 0 }, "400");
   });
});


