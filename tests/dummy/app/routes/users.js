import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.A([
      { userName: 'jane', role: 'admin' },
      { userName: 'john', role: 'guest' }
    ]);
  }
});
