$('.sign-up-btn').on('click', function (e) {
  e.preventDefault();
  if (window._gaq) _gaq.push(['_trackEvent', 'Pricing', 'Click', 'Sign Up']);
  window.Auth0.signIn({ onestep: true,
                        provisioningOnUnknownDomain: false,
                        title: 'Sign up with...',
                        signInButtonText: 'Sign Up',
                        showEmail: false,
                        socialBigButtons: true });
});


$('.sign-in-btn').on('click', function (e) {
  e.preventDefault();
  if (window._gaq) _gaq.push(['_trackEvent', 'Pricing', 'Click', 'Sign In']);
  window.Auth0.signIn({ onestep: true,
                        provisioningOnUnknownDomain: false,
                        title: 'Sign In',
                        signInButtonText: 'Sign In',
                        strategyDomainInvalid: 'Your company {domain} has not been setup for Single Sign On. Please use Google or a Windows Live account to sign-in. You can setup Single Sign On with your organization directory through the Auth0 dashboard.' });
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
