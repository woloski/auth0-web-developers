$('.sign-up-btn').on('click', function (e) {
  e.preventDefault();
  if (window._gaq) _gaq.push(['_trackEvent', 'Pricing', 'Click', 'Sign Up']);
  window.Auth0.signIn({ onestep: true,
                        provisioningOnUnknownDomain: false,
                        title: 'Sign Up',
                        strategyDomainInvalid: '<span style="color: rgb(182, 77, 82); font-size: 12px; line-height: 1.5em;">The domain <strong>{domain}</strong> has not been setup for Single Sign On. Please use Google or a Windows Live account to sign-in. <br />You can setup Single Sign On with your organization directory through the Auth0 dashboard.</span>' });
});
