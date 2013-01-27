App.Router.map(function() {
  this.resource('people');
  this.resource('person', { path: '/people/:person_id' });
  this.resource('personEdit', { path: '/people/:person_id/edit' });
  this.route("personNew", { path: "/people/new" });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('people');
  }
});

App.PeopleRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', App.Person.find());
  }
});

App.PersonNewRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', App.Person.createRecord());
  }
});