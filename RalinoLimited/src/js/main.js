//= ../../bower_components/jquery/dist/jquery.js
//= ../../node_modules/foundation-sites/dist/js/foundation.min.js
//= partials/ajaxEmailSender.js
//= partials/fetchAddress.js
//= partials/wow.min.js

window.onresize = () => {
    // console.dir(document.body);
    var overl = document.getElementById("testtt");
    var column = document.getElementById("js-hack");
    // console.log(document.body.clientWidth);
    if (document.body.clientWidth <= 1023){
      overl.classList.remove("hack-row");
      column.classList.remove("st-row");

    } else {
     overl.classList.add("hack-row");
     column.classList.add("st-row");
   }
 }

 $(document).foundation();
 new WOW().init(); 

 (function() {

  "use strict";

  var toggles = document.querySelectorAll(".phone-button");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();
// Phone menu
$(document).ready(function() {

  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });
  $(window).resize(function() {
    if ($(window).width() > 639) {
      $('nav ul').removeAttr('style');
    }
  });
});

function moveToSection(event) {
  event.preventDefault();

  var target = $(event.target).attr('href');
  var offsetTop = $(target).offset().top;

  if ($('.button_hamburger').is(':visible')) {
    $('.button_hamburger + .menu, #overlay').removeClass('is-visible');
    $('body').removeClass('hidden');
    $('.button_hamburger').removeClass('is-active');
  }

  $('html, body').animate({
    scrollTop: offsetTop,
  }, 500);
}

$(".smoothScroll").on('click', moveToSection);

$(".send-email").delay(2000).fadeOut(1000);

$("#contacts_form").on("submit", function (ev, elem) {
  ev.preventDefault();
});
$("#contacts_form").ajaxEmailSender({
    domain: "moasernlimited.com", // Corp Group URL
    autorizationToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtb2FzZXJubGltaXRlZC5jb20iLCJpYXQiOjE1NDg4NDQwNjY5NTIsImV4cCI6MTU4MDM4MDA2Njk1MiwiYXVkIjoibW9hc2VybmxpbWl0ZWQuY29tIiwic3ViIjoibW9hc2VybmxpbWl0ZWQuY29tIn0._qTMg54EMUvwhkl_FRRgjyG9D5sfvesQmUQeRL9MHVk",
    event: "formvalid.zf.abide",
    supportEmail: "support@moasernlimited.com"
  });

var getAddress = ({
    site: "aurora-star.net", // Any site from the Company
    corp_id: "644", // Company ID
    country_code: "CY",
    addressContainer: $('.addressContainer')
  });


// Fixed menu
jQuery("document").ready(function($){

  var menu = $('.main-header');
  var menu_color = $('.main-menu__link');
  var logo_color = $('.logo-color ');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
      menu.addClass("fixed-menu-nav");
      menu_color.addClass("fixed-menu-color");
      logo_color.addClass("fixed-logo-color");
    } else {
      menu.removeClass("fixed-menu-nav");
      menu_color.removeClass("fixed-menu-color");
      logo_color.removeClass("fixed-logo-color");
    }
  });

});

// Menu
$("#navToggle").click(function() {

  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
    $(".main-menu__link").css("color", "#fff");
    $('.main-menu__list li').on('click', function(){
      $('.navBurger').removeClass('active');
      $('#test').removeClass('open');
      $('body').removeClass('locked');
      $(".fixed-menu-color").css("color", "");
    })
  });
// Go to top
jQuery(document).ready(function($){
  var speed = 500,
  $scrollTop = $('<a href="#" title="go to top" class="scrollTop"><i class="fa fa-angle-double-up"></i></a>').appendTo('body');        
  $scrollTop.click(function(e){
    e.preventDefault();
    $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
  });
  function show_scrollTop(){
    ( $(window).scrollTop() > 300 ) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
  }
  $(window).scroll( function(){ show_scrollTop(); } );
  show_scrollTop();
});
