$('#sign-up-btn').on('click', function (e) {
  e.preventDefault();
  $('#sign-up').addClass('active');
  $('.overlay')
    .show()
    .addClass('active');

});

$('.close').click(function (e) {
  e.preventDefault();
  $('.panel').removeClass('active');
  $('.overlay')
    .hide()
    .removeClass('active');  
});

$('#sign-up-form').on('submit', function (e) {
  e.preventDefault();
  $.ajax({
    url: '/mail',
    type: 'POST',
    data: $(this).serialize(),
    success: function () {
      $('input').val('');
      $('#sign-up').removeClass('active');
      $('#sign-up-done').addClass('active');
    }
  });
});

!function ($) {
  $(function(){
  window.prettyPrint && prettyPrint()   
  })
}(window.jQuery);