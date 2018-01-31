$(document).ready(function() {
  "use strict";
  console.log('Page ready!');

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

   if ( factsY <= window.innerHeight - factsHeight && triggered === false){
     console.log(triggered);
       $('.count').countTo({
         speed: 3000,
         refreshInterval:90
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
});
