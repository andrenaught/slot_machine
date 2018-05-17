import Controller from '@ember/controller';
import { observer } from '@ember/object';

export default Controller.extend({

  //This acts as 'session data'
  //looks at logged in user and pulls in extra values from firebase from that user (like their 'credits')
  set_user_data: function() {
    var self = this;
    var my_email = this.get('session.currentUser.email');

    self.store.findAll('user').then(function(users) {
      users.forEach(function(user) {
        if (my_email == user.email) {
          //set session data
          console.log("Hello " + user.email);
          self.set('session.currentUser.credits', user.credit);
          self.set('session.currentUser.id', user.id);
        }
      });
    });
  },

  //check is authentication data has been loaded
  observe_session_load: observer ('session.isAuthenticated', function() {
    if (this.get('session.isAuthenticated') && !this.get('just_logged_in')) {
      this.set_user_data();
    }
  }),

  //this will load automatically when page loads
  init: function() {
    this._super();
    console.log("we're on " + this.get('page_title'));
  }
});
