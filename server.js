var express = require('express');
var http = require('http');

var port = process.env.PORT || 8080;

var app = express();

app.configure(function(){
  this.set('view engine', 'jade');
  this.set('views', 'views');

  this.use(express.logger('dev'));

  this.use(express.static(__dirname + '/public'));
});

app.get('/', function (req, res) {
  res.render('index');
});

http.createServer(app).listen(port, function () {
  console.log('listening on http://localhost:' + port);
});