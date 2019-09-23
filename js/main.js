$(document).ready(function () {
  $('nav a').click(function () {
    $('a').removeClass('active')
    console.log($('a'));
    $(this).addClass('active')
    console.log($('a'));
  })

  $('#skillset').scroll(function() {
       console.log('you scrolled on social');
    });
  });
