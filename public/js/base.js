$('.sign-up-btn').on('click', function (e) {
  e.preventDefault();
  if (window._gaq) _gaq.push(['_trackEvent', 'Pricing', 'Click', 'Sign Up']);
      widget.signup();
      $('.a0-footer').removeClass('a0-hide');
});


$('.sign-in-btn').on('click', function (e) {
  e.preventDefault();
  if (window._gaq) _gaq.push(['_trackEvent', 'Pricing', 'Click', 'Sign In']);
  widget.signin();
  $('.a0-footer').removeClass('a0-hide');
});

$('#subscribe-newsletter').on('submit', function(e){
  e.preventDefault();
  var email = $('#subscribe-email').val();
  if( email === '' )
    return;

  $.ajax({
    url: '/subscribe',
    type: 'POST',
    data: { email: email },
    success: function () {
      $('#subscribe-email').val('');
    }
  });
});
