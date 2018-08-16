// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
// Port Number
const port = process.env.PORT || 3000
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Body Parser Middleware
app.use(bodyParser.json());
// CORS Middleware
app.use(cors());
// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/majeni/index.html'));
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
  });
