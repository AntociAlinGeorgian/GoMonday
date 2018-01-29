$(document).ready(function(){
  console.log('Page ready!');

  //typing text conf.
  var typed = new Typed('.header-content .header-cont h3 span', {
    strings: ["is the best day to start being productive!", "is not that bad as people say!", "is a new day, so new you!"],
    loop: true,
    startDelay: 1e3,
    backDelay: 3e3,
    typeSpeed: 30
  });
});
