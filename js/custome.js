

$(document).ready(function () {
    $.fakeLoader({
        timeToHide:2000,
        bgColor:"#fff",
        spinner:"spinner3"
    });
});


 $("body").niceScroll({
  cursorcolor: "#008ed6",
  cursorwidth: "6px",
  cursorborder: "1px solid #fff0",
  scrollspeed: 160,
  mousescrollstep: 20,
  zindex: "auto"| [2000],
});


$(function(){
    $(window).on("scroll", function(){
      if($(window).scrollTop() > 200){
        $(".navbar").addClass("scroll-nav");
      } else {
        $(".navbar").removeClass("scroll-nav");
      }
  });
});


$(document).ready(function() {
  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    smartSpeed:750,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


 new WOW().init();

 



 


 