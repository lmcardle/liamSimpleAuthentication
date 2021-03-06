import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('public');
  this.route('protected');
  this.route('login');
  this.route('secret');
});
