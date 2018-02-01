$(document).ready(function() {

  //preloader
  $(window).on('load', function() {
    $('.loading').fadeOut(500);
  });

  //fixed navbar
  $('body').scroll(function() {
    if ($('body').scrollTop() > 50) {
      $('.navbar').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed');
    }

    // scrollspy by Enoh $$
    $('.navbar a').removeClass('active');
    $('.sections').each(function(){


      var section = this;
      var topSection = this.getBoundingClientRect().top;
      var wh = window.innerHeight;
      if (topSection - 80 <= wh/2 && (Math.abs(topSection - 80)) <= wh/2){
        $('.navbar a.nav-item-' + this.id).addClass('active');
        console.log(this.id);

      }
    });

  });

  //collapsed menu
  $(document).on('click', '.navbar-collapse.in', function(e) {
    console.log('test');
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
    }
  });

  //smooth scroll
  $("#navbar a").click(function(e) {
    e.preventDefault();
    var offsetTop = $( $(this).attr('href') )[0].offsetTop;
    $('html, body').animate({
        scrollTop: offsetTop - 80
    }, 1000);
  });

  //typing text conf.
  var typed = new Typed('.header-content .header-cont h3 span', {
    strings: ["is the best day to start being productive!", "is not that bad as people say!", "is a new day, so new you!"],
    loop: true,
    startDelay: 1e3,
    backDelay: 3e3,
    typeSpeed: 30
  });

  //popup
  $('.modal-image').magnificPopup({
    type: 'inline',
    midClick: true
  });

  // ISOTOPE TRIGGER
  var $grid = $('.work-content').isotope({
    itemSelector: '.work-item',
    stagger: 30
  });
  $('.filter-work').on('click', '.button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  // change is-checked class on buttons
  $('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'a', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  // COUNT TRIGGER
  var triggered = false;
  $('body').scroll(function() {
    var factsProps = $('#facts')[0].getBoundingClientRect();
    var factsHeight = factsProps.height;
    var factsY = factsProps.top;

    if (factsY <= window.innerHeight - factsHeight && triggered === false) {
      console.log(triggered);
      $('.count').countTo({
        speed: 3000,
        refreshInterval: 90
      });
      triggered = true;
    }
  });


  // OWL CAROUSEL TRIGGER
  $('.owl-carousel').owlCarousel({
    items: 1,
    margin: 0,
    dots: true
  });

  // MASONRY
    $('.work-content').isotope({
      itemSelector: '.work-caption img',
      masonry: {
        columnWidth: 0
      }
    });
});
