//= ../../bower_components/jquery/dist/jquery.js
//= ../../node_modules/foundation-sites/dist/js/foundation.min.js
//= partials/ajaxEmailSender.js
//= partials/fetchAddress.js
//= partials/parallax.min.js
//= https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js

$(document).foundation();

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
    domain: "asdiroflimited.com", // Corp Group URL
    autorizationToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhc2Rpcm9mbGltaXRlZC5jb20iLCJpYXQiOjE1NDg4NDQwMzY3NzUsImV4cCI6MTU4MDM4MDAzNjc3NSwiYXVkIjoiYXNkaXJvZmxpbWl0ZWQuY29tIiwic3ViIjoiYXNkaXJvZmxpbWl0ZWQuY29tIn0.Od96yNHQuNw_qWklTmdqAj3c2i39uLQ5E5-xNLtD6J8",
    event: "formvalid.zf.abide",
    supportEmail: "support@asdiroflimited.com"
});

var getAddress = ({
    site: "spiral-game.com", // Any site from the Company
    corp_id: "640", // Company ID
    country_code: "CY",
    addressContainer: $('.addressContainer')
});

window.onload = function () {

  var l = Snap('#logo');
 
  setTimeout( function() {
    // modify this one line below, and see the result !
    var logoTitle = 'Asdirof Limited';
    var logoRandom = '';
    var logoTitleContainer = l.text(40, '98%', '');
    var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
    logoTitleContainer.attr({
      fontSize: 28,
      fill: '#D3E2E3',
      class: "test",
      fontFamily: 'Mukta',
      fontWeight: '700'
    });

    function generateRandomTitle(i, logoRandom) {
      setTimeout( function() {
        logoTitleContainer.attr({ text: logoRandom });
      }, i*70 );
    }

    for( var i=0; i < logoTitle.length+1; i++ ) {
      logoRandom = logoTitle.substr(0, i);
      for( var j=i; j < logoTitle.length; j++ ) { 
        logoRandom += possible.charAt(Math.floor(Math.random() * possible.length)); 
      }
      generateRandomTitle(i, logoRandom);
      logoRandom = '';
    }

  }, 300 );
}
