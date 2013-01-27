var App = Ember.Application.create();
App.FixtureStore = DS.Store.create({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});
