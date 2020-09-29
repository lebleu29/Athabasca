$("#scroll-icons a[href^='#']").on('click', function(e) {

// prevent default anchor click behavior
e.preventDefault();

// store hash
var hash = this.hash;

// animate
$('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 300, function(){

    // when done, add hash to url
    window.location.hash = hash;
  });

});