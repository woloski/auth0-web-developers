$('.sign-up-btn').on('click', function (e) {
  e.preventDefault();
  if (window._gaq) _gaq.push(['_trackEvent', 'Pricing', 'Click', 'Sign Up']);
  window.Auth0.signIn({ onestep: true,
                        title: 'Sign in with...' });
});


$('.sign-in-btn').on('click', function (e) {
  e.preventDefault();
  if (window._gaq) _gaq.push(['_trackEvent', 'Pricing', 'Click', 'Sign In']);
  window.Auth0.signIn({ onestep: true,
                        title: 'Sign in with...' });
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
