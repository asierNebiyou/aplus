$(document).ready(function(){
  // Stellar parallax
  if ($.fn.stellar) {
    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });
  }

  // Animate on scroll
  $('.element-animate').each(function(){
    var $this = $(this);
    $this.waypoint(function(direction) {
      if (direction === 'down' && !$this.hasClass('animated')) {
        $this.addClass('animated fadeInUp');
        $this.removeClass('element-animate');
      }
    }, { offset: '80%' });
  });

  // Navbar scroll effect
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.site-navbar').addClass('scrolled');
    } else {
      $('.site-navbar').removeClass('scrolled');
    }
  });

  // Loader
  $('.site-loader').fadeOut('slow');
});