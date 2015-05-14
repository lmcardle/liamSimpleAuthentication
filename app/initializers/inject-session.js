import Ember from 'ember';

export function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');
  application.register('service:session', Ember.Object);
  application.inject('route', 'session', 'service:session');
  application.inject('controller', 'session', 'service:session');
}

export default {
  name: 'inject-session',
  initialize: initialize
};
