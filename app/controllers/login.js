import Controller from '@ember/controller';

export default Controller.extend({
  page_title: 'Login Page',

  actions: {

    //log in the user ('provider' will be google)
    signIn: function(provider) {
      this.get('session').open('firebase', {
        provider: provider
      }).then(function(data) {
        console.log("Logged in");
        console.log(data.currentUser);
      });
    },
    //sign out the user
    signOut: function() {
      this.get('session').close();
    },
  }
});
