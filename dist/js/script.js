$(window).on("load", function() {
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(650);
  });
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });
});
$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 3000,
    pagination: false
  });

  let typed = new Typed(".typed", {
    strings: ["Web developer", "Software engineer", "Hiking lover"],
    typeSpeed: 60,
    loop: true,
    startDelay: 1000,
    showCursor: false,
    backSpeed: 40
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });
  let skillsTopOffset = $(".skills-section").offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find("percent")
            .text(Math.round(percent));
        }
      });
    }
  });

  $("[data-fancybox]").fancybox();

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");
    let selector = $(this).attr("data-filter");
    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });
    return false;
  });

  $("#navigation li a").click(function(e) {
    e.preventDefault();
    let targetElement = $(this).attr("href");
    let targetPosition = $(targetElement).offset().top;
    $("html,body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;
  $(window).on("scroll", stickyNavigation);
  function stickyNavigation() {
    let body = $("body");
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixed-nav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixed-nav");
    }
  }
});
