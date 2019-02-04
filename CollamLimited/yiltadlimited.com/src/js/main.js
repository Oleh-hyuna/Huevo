//= ../../bower_components/jquery/dist/jquery.js
//= ../../node_modules/foundation-sites/dist/js/foundation.min.js
//= partials/ajaxEmailSender.js
//= partials/fetchAddress.js

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
    domain: "yiltadlimited.com", // Corp Group URL
    autorizationToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5aWx0YWRsaW1pdGVkLmNvbSIsImlhdCI6MTU0ODg0NDAyNTYzNywiZXhwIjoxNTgwMzgwMDI1NjM3LCJhdWQiOiJ5aWx0YWRsaW1pdGVkLmNvbSIsInN1YiI6InlpbHRhZGxpbWl0ZWQuY29tIn0.TpycqJJdQz5BqUb-PQD98PA0i9suuwxocaOpOKPAl9c",
    event: "formvalid.zf.abide",
    supportEmail: "support@yiltadlimited.com"
});

var getAddress = ({
    site: "aivanow.com", // Any site from the Company
    corp_id: "638", // Company ID
    country_code: "CY",
    addressContainer: $('.addressContainer')
});

