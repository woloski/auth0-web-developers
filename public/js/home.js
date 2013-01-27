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

$('#screenshots').carousel({ interval: 20000});

$('#screenshots').on('slide', function(e) {
  var which = $(e.relatedTarget).data('explain');
  $('.item-explain.active').removeClass('active');
  $('.item-explain.' + which).addClass('active');
});

$(document).keydown(function(e){
    if (e.keyCode == 37) {
      $('#screenshots').carousel('prev');
      return false;
    }
    if (e.keyCode == 39) {
      $('#screenshots').carousel('next');
      return false;
    }
});

$('#screenshots img').on('click', function() {
  $('#screenshots').carousel('next');
});

!function ($) {
  $(function(){
  window.prettyPrint && prettyPrint()   
  })
}(window.jQuery);