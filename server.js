var express = require('express');
var http = require('http');

var port = process.env.PORT || 8080;

var app = express();

var stylus = require('stylus');
var nib = require('nib');

app.configure(function(){
  this.set('view engine', 'jade');
  this.set('views', 'views');

  this.use(express.logger('dev'));
  this.use(express.bodyParser());
  
  this.use(stylus.middleware({
    debug: process.env.NODE_ENV !== "production",
    force: process.env.NODE_ENV !== "production",
    src: __dirname + '/views', // .styl files are located in `views/stylesheets`
    dest: __dirname + '/public', // .styl resources are compiled `/stylesheets/*.css`
    compile: function (str) { // optional, but recommended
      return stylus(str)
        .set('paths', [__dirname + '/views/css'])
        .set('compress', false)
        .use(nib());
    }
  }));

  this.use(function(req, res, next) {
    res.locals.debug = process.env.NODE_ENV !== "production";
    next();
  });

  this.use(express.static(__dirname + '/public'));
});

app.get('/', function (req, res) {
  res.redirect('https://www.auth0.com');
});

app.get('/pricing', function (req, res) {
  res.redirect('https://www.auth0.com/pricing');
});

app.get('/:page', function(req, res) {
  res.render(req.params.page);
});

app.post('/mail', function (req, res) {
  var mails = require('./lib/mails');
  var mailNotifier = require('./lib/mailNotifier');
  mailNotifier.notify(req.body.email); 
  mails.save(req.body.email, function () {
    res.send(200);
  });
});

app.post('/subscribe', function (req, res) {
  var mailNotifier = require('./lib/mailNotifier');
  mailNotifier.notifySubscription(req.body.email, function(err){
    res.send(200);
  }); 
});

http.createServer(app).listen(port, function () {
  console.log('listening on http://localhost:' + port);
});