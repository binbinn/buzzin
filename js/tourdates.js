// Menu-toggle button

$(document).ready(function() {
    $(".nav-icon").click(function() {
          $(".nav-icon").toggleClass('active');
          $("nav ul").toggleClass('showing');
    })
})

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})