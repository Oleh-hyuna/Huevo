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
    domain: "yelmedlimited.com", // Corp Group URL
    autorizationToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5ZWxtZWRsaW1pdGVkLmNvbSIsImlhdCI6MTU0NjQ0ODE1MzA0NCwiZXhwIjoxNTc3OTg0MTUzMDQ0LCJhdWQiOiJ5ZWxtZWRsaW1pdGVkLmNvbSIsInN1YiI6InllbG1lZGxpbWl0ZWQuY29tIn0.RpWwIO4el1ITGhTKDOR4I2vqrrTDEYKCuW2IBpoM_cI",
    event: "formvalid.zf.abide",
    supportEmail: "support@yelmedlimited.com"
});

var getAddress = ({
    site: "musetimes.com", // Any site from the Company
    corp_id: "514", // Company ID
    country_code: "UK",
    addressContainer: $('.addressContainer')
});

