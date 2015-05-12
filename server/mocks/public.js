module.exports = function(app) {
  var express = require('express');
  var publicRouter = express.Router();

  publicRouter.get('/', function(req, res) {
    res.send('Lorem ipsum dolor sit amet');
  });

  app.use('/api/public', publicRouter);
};
