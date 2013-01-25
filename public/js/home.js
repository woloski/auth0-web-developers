$('#sign-up-btn').on('click', function (e) {
  e.preventDefault();
  $('#sign-up').addClass('active');
  $('.overlay')
    .show()
    .addClass('active');

});

$('.close').click(function (e) {
  e.preventDefault();
  $('#sign-up').removeClass('active');
  $('.overlay')
    .hide()
    .removeClass('active');  
});