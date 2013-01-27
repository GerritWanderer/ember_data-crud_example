App.Person = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  tattoosArray: DS.attr('string'),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});

App.Person.FIXTURES = [
  {id: "1", firstName: "Yehuda", lastName: "Katz"},
  {id: "2", firstName: "Alex", lastName: "MacCaw"}
];
