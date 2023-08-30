// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', function(event) {
      event.preventDefault();
      
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        scrollSmoothly(targetElement);
      }
    });
  }

  // Function to scroll smoothly to a target element
  function scrollSmoothly(targetElement) {
    var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 800; // Duration of the smooth scroll animation in milliseconds.
    var startTimestamp = null;

    function animateScroll(timestamp) {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      var progress = timestamp - startTimestamp;
      var scrollY = easeInOutCubic(progress, startPosition, distance, duration);
      window.scrollTo(0, scrollY);

      if (progress < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) {
        return c / 2 * t * t * t + b;
      }
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animateScroll);
  }

  var bookNowButtons = document.querySelectorAll('.btn');
  for (var j = 0; j < bookNowButtons.length; j++) {
    bookNowButtons[j].addEventListener('click', function() {
      alert('Thank you for booking!');
    });
  }

  // Select the mobile-menu-toggle and mobile-nav elements
  var mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');

  // Check if the elements exist before adding event listeners
  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
    });
  }
});
