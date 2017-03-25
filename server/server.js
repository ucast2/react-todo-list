var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware'); // use webpack w/ Express
var webpackHotMiddleware = require('webpack-hot-middleware'); // Hot Module Reloading

var app = express();

var compiler = webpack(config);
// publicPath: path to replace actual 'bundle.js' w/ HMR-capable 'bundle.js'
// noInfo: less verbose in console
// allows use of inline erros (not in bundle.js)
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

// serving up static files from 'dist' folder
app.use(express.static('./dist'));

// send index.html when at path '/'
app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});

// Ally's comment
