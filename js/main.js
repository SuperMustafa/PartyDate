

$(document).ready(function() {
  // Sidebar toggle functionality
  $('.open-sidebar').on('click', function() {
      // Animate sidebar open
      $('.open-sidebar').stop().animate({ left: "230px" });
      $('.side-bar').stop().animate({ width: '230px', paddingInline: '10px' });
      $('.home-background').stop().animate({ marginLeft: '230px' });
      $('.anchor-list, .close-btn').css('opacity', '1');
  });

  $('.close-btn').on('click', function() {
      // Animate sidebar close
      $('.open-sidebar').stop().animate({ left: "0px" });
      $('.side-bar').stop().animate({ width: '0px', paddingInline: '0px' });
      $('.home-background').stop().animate({ marginLeft: '0px' });
      $('.anchor-list, .close-btn').css('opacity', '0');
  });

  // Dropdown toggle functionality
  $('#slider-down .press').on('click', function() {
      // Close other dropdowns and toggle the clicked one
      $('.drop').not($(this).next()).slideUp(500);
      $(this).next().stop().slideToggle(500);
  });

  // Countdown timer initialization
  window.onload = function() {
      countDownToTime("10 December 2024 9:00:00");
  }

  function countDownToTime(countTo) {
      let futureDate = new Date(countTo).getTime() / 1000;
      let now = new Date().getTime() / 1000;

      let timeDifference = futureDate - now;

      let days = Math.floor(timeDifference / (24 * 60 * 60));
      let hours = Math.floor((timeDifference % (24 * 60 * 60)) / 3600);
      let mins = Math.floor((timeDifference % 3600) / 60);
      let secs = Math.floor(timeDifference % 60);

      $(".days").html(`${days} D`);
      $(".hours").html(`${hours} h`);
      $(".minutes").html(`${mins} m`);
      $('.seconds').html(`${secs} s`);

      setTimeout(function() {
          countDownToTime(countTo);
      }, 1000);
  }

  // Smooth scroll functionality
  $(".anchor-list li a").on('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      let sectionId = $(this).attr("href");
      let positionOfSection = $(sectionId).offset().top;

      $("html, body").stop().animate({ scrollTop: positionOfSection }, 2000);
  });
});




