var getDb = require('./getDb');

exports.save = function (email, done) {
  getDb(function (db) {
    db.collection('mails')
      .insert({email: email}, function (err) {
        if (err) done(err);
        done(null, email);
      });
  });
};