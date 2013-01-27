App.Router.map(function() {
  this.resource('persons');
  this.resource('person', { path: '/persons/:person_id' });
  this.resource('personEdit', { path: '/persons/:person_id/edit' });
  this.route("personsNew", { path: "/persons/new" });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('persons');
  }
});

App.PersonsRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', App.Person.find());
  }
});

App.PersonsNewRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', App.Person.createRecord());
  }
});