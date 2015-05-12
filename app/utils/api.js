import Ember from 'ember';

export default {
  token: null,

  login: function(username, password) {
    var self = this;

    var payload = {
      username: username,
      password: password
    };

    var deferred = Ember.$.post('/session', payload).then(
      function(data) {
        self.token = data.token;
        return data.user;
      },
      function(err) {
        return { status: err.statusText, message: err.responseText };
      }
    );

    return Ember.RSVP.resolve(deferred);
  },

  logout: function() {
    var self = this;

    var settings = { type: 'DELETE', headers: { 'Authorization': 'Token token=' + this.token } };

    var deferred = Ember.$.ajax('/session', settings).then(
      function() {
        self.token = null;
      }
    );

    return Ember.RSVP.resolve(deferred);
  },

  get: function(resource) {
    var url = '/' + resource;

    var settings;

    if (this.token) {
      settings = { headers: { 'Authorization': 'Token token=' + this.token } };
    } else {
      settings = {};
    }

    var deferred = Ember.$.ajax(url, settings).then(null, function(err) {
      return { status: err.statusText, message: err.responseText };
    });

    return Ember.RSVP.resolve(deferred);
  }

};
