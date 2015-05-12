module.exports = function(app) {
  var express = require('express');
  var sessionRouter = express.Router();
  var bodyParser = require('body-parser').json();

  sessionRouter.get('/', function(req, res) {
    res.send({
      'session': []
    });
  });

  sessionRouter.post('/', function(req, res) {
    console.log('req.body', req.body);
    var statusCode, body = {token: '', user: {role: '', name: ''}};
    if (req.body.username === 'admin' && req.body.password === 'secret') {
      statusCode = 201;
      body.token = 'admin';
      body.user.role = 'admin';
      body.user.name = 'Administrator';
    } else if (req.body.username === 'user' && req.body.password === 'secret') {
      statusCode = 201;
      body.token = 'user';
      body.user.role = 'user';
      body.user.name = 'User';
    } else {
      statusCode = 201;
      body = 'Incorrect username/password';
    }
    res.status(statusCode).send(body);
  });

  sessionRouter.get('/:id', function(req, res) {
    res.send({
      'session': {
        id: req.params.id
      }
    });
  });

  sessionRouter.put('/:id', function(req, res) {
    res.send({
      'session': {
        id: req.params.id
      }
    });
  });

  sessionRouter.delete('/', function(req, res) {
    console.log('req.body', req.body);
    res.status(204).send('You are logged out');
  });

  app.use('/api/session', bodyParser, sessionRouter);
};
