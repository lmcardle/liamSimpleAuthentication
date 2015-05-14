import Ember from 'ember';
import API from '../utils/api';

export default Ember.Route.extend({
  model: function() {
    return API.get('api/public');
  }
});
