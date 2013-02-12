$('#sign-up-btn').on('click', function (e) {
  e.preventDefault();
  _gaq.push(['_trackEvent', 'Home', 'Click', 'Sign Up']);
  if (window.Auth0) {
    window.Auth0.signIn({ onestep: true, title: 'Sign Up' });
  }

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

$('#screenshots').carousel('pause');

$('#screenshots').on('slide', function(e) {
  var which = $(e.relatedTarget).data('explain');
  $('.item-explain.active').removeClass('active');
  $('.item-explain.' + which).addClass('active');

  $('#screenshots-pager i.icon-circle')
      .removeClass('icon-circle')
      .addClass('icon-circle-blank');


  $('#screenshots-pager a.' + which).find('i')
    .removeClass('icon-circle-blank')
    .addClass('icon-circle');
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

 $("#screenshots-pager a").click(function(e){
    var index = $(this).index();
    $('#screenshots-pager i.icon-circle')
      .addClass('icon-circle-blank')
      .removeClass('icon-circle');

    $(this).find('i')
      .removeClass('icon-circle-blank')
      .addClass('icon-circle');

    $('#screenshots').carousel(index);
    e.preventDefault();
});

!function ($) {
  $(function(){
  window.prettyPrint && prettyPrint()   
  })
}(window.jQuery);