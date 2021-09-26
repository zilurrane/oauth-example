var bodyParser = require('body-parser');
var express = require('express');
var OAuthServer = require('express-oauth-server');
var memorystore = require('./model.js');

var app = express();

app.oauth = new OAuthServer({
  model: new memorystore()
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(app.oauth.authorize());

app.use(function(req, res) {
  res.send('Secret area');
});

app.listen(5000);
