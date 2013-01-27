App.PersonsNewController = Ember.ObjectController.extend({
  create: function() {
    this.store.commit();
    this.content.addObserver('id', this, 'afterCreate');
  },
  cancle: function() {
    this.content.deleteRecord();
    this.transitionToRoute('users.index');
  },
  afterCreate: function () {
    this.content.removeObserver('id', this, 'afterCreate');
    this.transitionToRoute('person', this.content)
  }
});