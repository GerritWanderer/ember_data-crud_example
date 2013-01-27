App.PersonEditController = Ember.ObjectController.extend({
  update: function() {
    this.store.commit();
    this.transitionToRoute('person', this.content)
  },
  cancle: function() {
    if (this.content.isDirty) {
      this.content.rollback();
    }
    this.transitionToRoute('person', this.content)
  },
  destroy: function() {
    this.content.deleteRecord();
    this.store.commit();
    this.transitionToRoute('persons');
  },
});