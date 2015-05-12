module.exports = function(app) {
  var express = require('express');
  var secretRouter = express.Router();
  var bodyParser = require('body-parser').json();

  secretRouter.get('/', function(req, res) {
    var responseBody = 'Please login to access this page',
        responseCode = 401;

    var authHeader = req.get('Authorization');

    if (authHeader === 'Token token=user') {
      responseBody = 'You are not allowed to access this page';
      responseCode = 403;
    } else if (authHeader === 'Token token=admin') {
      responseBody = 'Since you can see this, you must be an admin';
      responseCode = 200;
    } else if (authHeader === 'Token token=expired') {
      responseBody = 'Your session has expired';
    }
    res.status(responseCode).send(responseBody);
  });


  app.use('/api/secret', bodyParser, secretRouter);
};
