$(document).ready( () => {

  $(window).scroll( () => {
    const hT = $('#skills').offset().top,
    hT1 = $('#about').offset().top,
    hT2 = $('#work').offset().top,
    hT3 = $('#contact').offset().top,
    hH = $('#skills').outerHeight(),
    hH1 = $('#about').outerHeight(),
    hH2 = $('#work').outerHeight(),
    hH3 = $('#contact').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    $('#scroll-skills, #scroll-about, #scroll-work, #scroll-contact').removeClass('scroll-color');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      $('#scroll-contact').addClass('scroll-color');
    }
    else if (wS > (hT+hH-wH)) {
      $('#scroll-skills').addClass('scroll-color');;
    }
    else if (wS > (hT2+hH2-wH)){
      $('#scroll-work').addClass('scroll-color');
    }
    else if (wS > (hT1+hH1-wH)){
      $('#scroll-about').addClass('scroll-color');
    }
  });

  //  $(window).scroll( () => {
  //   const hT1 = $('#about').offset().top,
  //       hH1 = $('#about').outerHeight(),
  //       wH = $(window).height(),
  //       wS = $(this).scrollTop();
  //        $('#scroll-about').removeClass('scroll-color');
  //   if (wS > (hT1+hH1-wH)){
  //       $('#scroll-about').addClass('scroll-color');
  //   }
  // });
  //
  // $(window).scroll( () => {
  //  const hT2 = $('#work').offset().top,
  //      hH2 = $('#work').outerHeight(),
  //      wH = $(window).height(),
  //      wS = $(this).scrollTop();
  //       $('#scroll-work').removeClass('scroll-color');
  //  if (wS > (hT2+hH2-wH)){
  //      $('#scroll-work').addClass('scroll-color');
  //  }
  // });
  //
  // $(window).scroll( () => {
  //  const hT3 = $('#contact').offset().top,
  //      hH3 = $('#contact').outerHeight(),
  //      wH = $(window).height(),
  //      wS = $(this).scrollTop();
  //       $('#scroll-contact').removeClass('scroll-color');
  //  if (wS > (hT3+hH3-wH)){
  //      $('#scroll-contact').addClass('scroll-color');
  //  }
  // });

});
