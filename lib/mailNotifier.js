var nodemailer = require('nodemailer');

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport('SMTP', {
    service: process.env.EMAIL_NOTIFY_SERVICE,
    auth: {
        user: process.env.EMAIL_NOTIFY_USER,
        pass: process.env.EMAIL_NOTIFY_PASSWORD
    }
});

exports.notifySubscription = function (mail, done) {
  done = done || function () {};

  var mailOptions = {
    from: process.env.EMAIL_NOTIFY_FROM,
    to: process.env.EMAIL_NOTIFY_TO,
    subject: '[auth0-cloudapp] newsletter subscription',
    html: 'New subscription from <a href="mailto:' + mail + '">' + mail + '</a>.'
  };

  smtpTransport.sendMail(mailOptions, function (err) {
    if(err) {
      console.log(err);
      return done(err);
    }
    done();
  });
};