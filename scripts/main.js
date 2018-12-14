$(document).ready(function() {
  //***************** CAROUSEL *************//

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    margin: 25,
    responsiveClass: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 1000,
    stopOnHover: true,
    responsive: {
      0: {
        items: 4,
        center: true,
        autoplay: false
      },
      600: {
        items: 3,
        loop: true,
        autoplay: false
      },
      1000: {
        items: 4,
        loop: true
      }
    }
  });

  // *********** NAVBAR **********//

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".navbar").addClass("activenav");
    } else {
      $(".navbar").removeClass("activenav");
    }
  });

  

  // ******** RETURN TO TOP ***********//

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {
      // If page is scrolled more than 50px
      $("#return-to-top").fadeIn(200); // Fade in the arrow
    } else {
      $("#return-to-top").fadeOut(200); // Else fade out the arrow
    }
  });
  $("#return-to-top").click(function() {
    // When arrow is clicked
    $("body,html").animate(
      {
        scrollTop: 0 // Scroll to top of body
      },
      500
    );
  });

  //***********  VIDEO POPUP **************//

  $(".video-popup").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  // ****** CHANGE ACTIVE ITEM ON SCROLL *********//

  $(function() {
    $(document).on("click", "a.page-scroll", function(event) {
      var $anchor = $(this);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top
          },
          1500,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });
  $("body").scrollspy({ target: ".navbar-nav" });

  // animation
  new WOW().init();


});
