//smooth scroll with scrollspy
$("#scroll-icons a[href^='#']").on("click", function (e) {
  // prevent default anchor click behavior
  e.preventDefault();

  // store hash
  var hash = this.hash;

  // animate
  $("html, body").animate({
      scrollTop: $(hash).offset().top,
    },
    300,
    function () {
      // when done, add hash to url
      window.location.hash = hash;
    }
  );
});

const vpc = new ViewportChecker('.animatedContent', {
  classToAdd: 'visible', // Class to add to the elements when they are visible,
  classToRemove: 'hidden', // Class to remove before adding 'classToAdd' to the elements
});
document.addEventListener('DOMContentLoaded', () => vpc.attach());