App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', App.Person.find("1"));
  }
});