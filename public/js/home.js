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

$('#screenshots').on('slide', function(e) {
  var which = $(e.relatedTarget).data('explain');
  $('.item-explain.active').removeClass('active');
  $('.item-explain.' + which).addClass('active');
});

!function ($) {
  $(function(){
  window.prettyPrint && prettyPrint()   
  })
}(window.jQuery);