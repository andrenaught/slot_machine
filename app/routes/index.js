import Route from '@ember/routing/route';

export default Route.extend({
  //beforeModel is needed to know whether we're logged in or not (aka session data)
  beforeModel: function() {
    this.get('session').fetch()
      .catch(() => {
        this.transitionTo('login');
    });
    this.transitionTo('game');
  }
});
